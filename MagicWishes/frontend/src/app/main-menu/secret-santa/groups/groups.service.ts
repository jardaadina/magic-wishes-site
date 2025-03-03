import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { RegisterService } from '../../../register/register.service';
import {
  NewSecretSanta,
  Participans,
} from './secret-santa-group/create-secret-santa/create-secret-santa.model';

@Injectable({
  providedIn: 'root',
})
export class GroupsService implements OnInit {
  private httpClient = inject(HttpClient);
  private registerService = inject(RegisterService);
  secretSantas = signal<NewSecretSanta[]>([]);

  ngOnInit(): void {
    this.secretSantas.set([]);
    this.getGroups();
  }

  getGroups() {
    const id = this.registerService.getUserId();
    this.httpClient
      .get<Participans[]>('http://localhost:8080/participans/find/' + id)
      .subscribe((resp) => {
        resp.forEach((r) => {
          this.httpClient
            .get<NewSecretSanta>(
              'http://localhost:8080/secret-santa/find/' + r.secretSantaId
            )
            .subscribe((response) => {
              this.secretSantas.set([...this.secretSantas(), response]);
            });
        });
      });
  }

  async addGroup(newGroup: NewSecretSanta) {
    this.secretSantas.set([...this.secretSantas(), newGroup]);
    console.log(this.secretSantas());
  }
}
