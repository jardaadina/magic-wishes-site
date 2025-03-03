import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../../register/register.service';

@Component({
  selector: 'app-isnologged',
  imports: [],
  templateUrl: './isnologged.component.html',
  styleUrl: './isnologged.component.css',
})
export class IsnologgedComponent {
  router = inject(Router);
  private registerService = inject(RegisterService);

  onClickingSignUp() {
    this.router.navigate(['/signin']);
  }

  onClickingLogIn() {
    this.router.navigate(['/login']);
  }
}
