import { Component, inject } from '@angular/core';
import { RegisterService } from '../../../register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-islogged',
  imports: [],
  templateUrl: './islogged.component.html',
  styleUrl: './islogged.component.css',
})
export class IsloggedComponent {
  private registerService = inject(RegisterService);
  private router = inject(Router);
  name = this.registerService.getUserName();

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
