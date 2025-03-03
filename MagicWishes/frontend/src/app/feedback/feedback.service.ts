import { inject, Injectable } from '@angular/core';
import { Form } from './feedback.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private httpClient = inject(HttpClient);

  sendFeedback(form: Form) {
    this.httpClient
      .post<Form>('http://localhost:8080/feedback/add', form)
      .subscribe((resp) => {});
  }
}
