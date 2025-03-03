import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User, validNewUser } from '../user.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  private router = inject(Router);
  private registerService = inject(RegisterService);
  private user: User | undefined;
  invalidCredentials = false;
  emailAlreadyExists = false;

  exists: boolean | null = null;

  async onSubmit(formData: NgForm) {
    this.emailAlreadyExists = false;
    this.user = {
      name: formData.form.value.name,
      email: formData.form.value.email,
      password: formData.form.value.password,
    };

    if (validNewUser(this.user)) {
      const status = this.registerService.signUp(this.user);
      status.then(async (resp) => {
        if (resp != true) {
          this.router.navigate(['/profile']);
        } else {
          this.emailAlreadyExists = true;
        }
      });
    } else {
      this.invalidCredentials = true;
    }
  }
}
