import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  private registerService = inject(RegisterService);
  private router = inject(Router);
  name = this.registerService.getUserName();

  clickingLogOut() {
    // this.registerService.logOut();
    this.registerService.logOut();
    this.router.navigate(['']);
  }
}
