import { Component, inject, input } from '@angular/core';
import { Wish } from '../../wish.model';
import { WishService } from '../../wish.service';
import { Router } from '@angular/router';
import { RegisterService } from '../../../../register/register.service';

@Component({
  selector: 'app-wish',
  imports: [],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
})
export class WishComponent {
  private wishService = inject(WishService);
  private registerService = inject(RegisterService);
  private router = inject(Router);
  wish = input.required<Wish>();

  onClick() {
    // this.wishService.deleteWish(this.wish());
    const fulfillWish = this.wish;
    fulfillWish().userIdWhoFulfill = this.registerService.getUserId();
    fulfillWish().active = false;
    this.wishService.fulfillWish(fulfillWish());

    this.router.navigate(['/']);
    this.router.navigate(['/wish']);
  }
}
