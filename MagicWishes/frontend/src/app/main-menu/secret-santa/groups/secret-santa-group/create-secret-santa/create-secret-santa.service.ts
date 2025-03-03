import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  NewSecretSanta,
  Participans,
  WhoToWho,
} from './create-secret-santa.model';
import { User } from '../../../../../register/user.model';
import { GroupsService } from '../../groups.service';

@Injectable({
  providedIn: 'root',
})
export class CreateSecretSantaService {
  private httpClient = inject(HttpClient);
  private participans?: Participans;
  private groupService = inject(GroupsService);

  async newSecretSantaEvent(
    newSecretSantaEvent: NewSecretSanta,
    users: User[]
  ) {
    const arrayOfIndices = users.map((user) => user.id);
    const indicies = [
      arrayOfIndices[arrayOfIndices.length - 1],
      ...arrayOfIndices,
    ];
    let counter = 0;

    console.log('debugging:', arrayOfIndices, indicies);

    this.httpClient
      .post<NewSecretSanta>(
        'http://localhost:8080/secret-santa/add',
        newSecretSantaEvent
      )
      .subscribe((resp) => {
        this.groupService.addGroup(resp);
        console.log('aici');

        users.forEach((user) => {
          this.participans = {
            userId: user.id!,
            secretSantaId: resp.id!,
          };

          this.httpClient
            .post<Participans>(
              'http://localhost:8080/participans/add',
              this.participans
            )
            .subscribe((response) => {
              this.httpClient
                .post<WhoToWho>('http://localhost:8080/who-to-who/add', {
                  userId1: response.userId,
                  userId2: indicies[counter++],
                  // userId2: user
                  secretSantaId: response.secretSantaId,
                })
                .subscribe((respp) => {});
            });
        });

        // this.httpClient.post<Participans>('http://localhost:8080/participans/add')
      });
  }
}
