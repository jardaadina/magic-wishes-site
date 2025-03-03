import { Component, inject, OnInit } from '@angular/core';
import { WishComponent } from './wish/wish.component';
import { WishService } from '../wish.service';
import { Wish } from '../wish.model';

@Component({
  selector: 'app-wishes',
  imports: [WishComponent],
  templateUrl: './wishes.component.html',
  styleUrl: './wishes.component.css',
})
export class WishesComponent {
  private wishService = inject(WishService);
  wishes = this.wishService.wishes;

  ngOnInit(): void {
    this.wishService.allWishes().then((resp) => {});
  }

  // ngOnInit(): void {
  //   this.wishService.allWishes().then((resp) => {
  //     console.log(resp);

  //     this.wishes = resp;
  //     console.log(this.wishes);
  //   });
  // }
}
