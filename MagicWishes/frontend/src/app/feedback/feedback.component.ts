import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FeedbackService } from './feedback.service';
import { Form } from './feedback.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  imports: [FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {
  private feedbackService = inject(FeedbackService);
  private router = inject(Router);
  private form?: Form;
  invalidForm = signal(0);

  onSubmit(formData: NgForm) {
    if (
      !formData.form.value.name ||
      !formData.form.value.email ||
      !formData.form.value.feedback ||
      !formData.form.value.comment
    ) {
      this.invalidForm.set(1);
    } else {
      this.invalidForm.set(0);
      this.form = {
        name: formData.form.value.name,
        email: formData.form.value.email,
        feedback: formData.form.value.feedback,
        comment: formData.form.value.comment,
      };

      this.feedbackService.sendFeedback(this.form);
      this.router.navigate(['/thanks']);
    }
  }
}
