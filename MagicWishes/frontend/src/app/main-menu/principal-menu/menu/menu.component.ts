import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../../register/register.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  private router = inject(Router);
  private registerService = inject(RegisterService);

  clickingFeedback() {
    this.router.navigate(['/feedback']);
  }

  clickingSeePastWishes() {
    try {
      if (
        !this.registerService.getUserId() &&
        !this.registerService.getUserName()
      ) {
        this.router.navigate(['/signin']);
      } else {
        this.router.navigate(['/past-wishes']);
      }
    } catch (error) {
      this.router.navigate(['/signin']);
    }
  }

  clickingAddNewWish() {
    try {
      if (
        !this.registerService.getUserId() ||
        !this.registerService.getUserName()
      ) {
        this.router.navigate(['/signin']);
      } else {
        this.router.navigate(['/new-wish']);
      }
    } catch (error) {
      this.router.navigate(['/signin']);
    }
  }

  clickingSecretSanta() {
    try {
      if (
        !this.registerService.getUserId() ||
        !this.registerService.getUserName()
      ) {
        this.router.navigate(['/signin']);
      } else {
        this.router.navigate(['/secret-santa']);
      }
    } catch (error) {
      this.router.navigate(['/signin']);
    }
  }
}
