import { Component, inject } from '@angular/core';
import { PastWishComponent } from './past-wish/past-wish.component';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-past-wishes',
  imports: [PastWishComponent],
  templateUrl: './past-wishes.component.html',
  styleUrl: './past-wishes.component.css',
})
export class PastWishesComponent {
  private wishService = inject(WishService);
  wishes = this.wishService.wishes;

  ngOnInit(): void {
    this.wishService.allWishes().then((resp) => {});
  }
}
