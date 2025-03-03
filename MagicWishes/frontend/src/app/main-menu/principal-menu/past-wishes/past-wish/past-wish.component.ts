import { Component, input } from '@angular/core';
import { Wish } from '../../wish.model';

@Component({
  selector: 'app-past-wish',
  imports: [],
  templateUrl: './past-wish.component.html',
  styleUrl: './past-wish.component.css',
})
export class PastWishComponent {
  wish = input.required<Wish>();
}
