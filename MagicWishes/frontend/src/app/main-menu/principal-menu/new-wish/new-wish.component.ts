import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Wish } from '../wish.model';
import { RegisterService } from '../../../register/register.service';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-new-wish',
  imports: [FormsModule],
  templateUrl: './new-wish.component.html',
  styleUrl: './new-wish.component.css',
})
export class NewWishComponent {
  private router = inject(Router);
  private registerService = inject(RegisterService);
  private wishService = inject(WishService);
  invalidForm = signal(0);

  private wish?: Wish;
  id: number = -1;

  clickingCancel() {
    this.wishService.allWishes();
    this.router.navigate(['/wish']);
  }

  onSubmit(formData: NgForm) {
    const userIdBuffer = this.registerService.getUserId();

    if (userIdBuffer) {
      this.id = userIdBuffer;
    } else {
      this.id = -1;
    }

    if (
      !formData.form.value.title ||
      !formData.form.value.description ||
      !formData.form.value.date ||
      !this.id
    ) {
      this.invalidForm.set(1);
    } else {
      this.invalidForm.set(0);
      this.wish = {
        title: formData.form.value.title,
        description: formData.form.value.description,
        userId: this.id,
        date: formData.form.value.date,
        active: true,
      };

      this.wishService.addWish(this.wish);
      this.router.navigate(['/wish']);
    }
  }
}
