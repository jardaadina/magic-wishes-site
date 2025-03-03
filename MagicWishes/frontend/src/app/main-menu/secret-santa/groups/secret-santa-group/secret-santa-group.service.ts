import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import {
  Participans,
  WhoToWho,
} from './create-secret-santa/create-secret-santa.model';
import { User } from '../../../../register/user.model';

@Injectable({
  providedIn: 'root',
})
export class SecretSantaGroupService {
  private httpClient = inject(HttpClient);
  users = signal<User[]>([]);
  secret = signal<User[]>([]);

  getParticipans(id: number) {
    this.users.set([]);
    this.httpClient
      .get<Participans[]>('http://localhost:8080/participans/findusers/' + id)
      .subscribe((resp) => {
        resp.forEach((r) => {
          this.httpClient
            .get<User>('http://localhost:8080/user/getname/' + r.userId)
            .subscribe((response) => {
              this.users.set([...this.users(), response]);
            });
        });
      });
  }

  getSecret(id1: number, id2: number) {
    this.httpClient
      .get<WhoToWho>('http://localhost:8080/who-to-who/find/' + id1 + '/' + id2)
      .subscribe((resp) => {
        this.httpClient
          .get<User>('http://localhost:8080/user/getname/' + resp.userId2)
          .subscribe((response) => {
            this.secret.set([response]);
            console.log('aici boss', response);
          });
      });
  }
}
