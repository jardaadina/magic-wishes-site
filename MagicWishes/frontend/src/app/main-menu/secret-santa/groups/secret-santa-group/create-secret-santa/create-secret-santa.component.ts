import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NewSecretSanta } from './create-secret-santa.model';
import { CreateSecretSantaService } from './create-secret-santa.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../../register/user.model';
import { Router } from '@angular/router';
import { GroupsService } from '../../groups.service';

@Component({
  selector: 'app-create-secret-santa',
  imports: [FormsModule],
  templateUrl: './create-secret-santa.component.html',
  styleUrl: './create-secret-santa.component.css',
})
export class CreateSecretSantaComponent {
  private newSecretSantaEventService = inject(CreateSecretSantaService);
  private httpClient = inject(HttpClient);
  private groupService = inject(GroupsService);
  private router = inject(Router);

  invalidForm = signal(0);
  invalidUser = signal(0);

  users = signal<User[]>([]);

  newSecretSanta?: NewSecretSanta;
  userEmail: string = '';

  onSubmit(form: NgForm) {
    if (
      !form.form.value.title ||
      !form.form.value.place ||
      this.users().length < 2
    ) {
      this.invalidForm.set(1);
    } else {
      this.invalidForm.set(0);
      this.newSecretSanta = {
        title: form.form.value.title,
        place: form.form.value.place,
      };
      this.groupService.addGroup(this.newSecretSanta).then(() => {
        this.newSecretSantaEventService
          .newSecretSantaEvent(this.newSecretSanta!, this.users())
          .then(() => {
            this.router.navigate(['/secret-santa']);
          });
      });
    }
  }

  addUser() {
    this.httpClient
      .get<User>('http://localhost:8080/user/getuser/' + this.userEmail)
      .subscribe((resp) => {
        if (resp != null) {
          this.invalidUser.set(0);
          const prevValues = this.users();
          this.users.set([...prevValues, resp]);
        } else {
          this.invalidUser.set(1);
        }
      });
  }
}
