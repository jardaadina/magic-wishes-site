import { Component, inject } from '@angular/core';
import { RegisterService } from '../register.service';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  private registerService = inject(RegisterService);
  private router = inject(Router);
  invalidCredentials = false;

  onSubmit(formData: NgForm) {
    this.registerService
      .logIn(formData.form.value.email, formData.form.value.password)
      .then((resp) => {
        if (resp == undefined) {
          this.invalidCredentials = true;
        } else {
          this.invalidCredentials = false;
          this.router.navigate(['/profile']);
        }
      });
  }
}
