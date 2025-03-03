import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { Wish } from './wish.model';
import { RegisterService } from '../../register/register.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private httpClient = inject(HttpClient);
  private registerService = inject(RegisterService);
  private wishs = signal<Wish[]>([]);
  wishes = this.wishs.asReadonly();

  async allWishes(): Promise<Wish[] | undefined> {
    try {
      const response = await lastValueFrom(
        this.httpClient.get<Wish[]>(
          'http://localhost:8080/wish/allbyuser/' +
            this.registerService.getUserId()
        )
      );
      this.wishs.set(response);
      return response;
    } catch (error) {
      return undefined;
    }
  }

  addWish(wish: Wish) {
    this.httpClient
      .post<Wish>('http://localhost:8080/wish/add', wish)
      .subscribe((resp) => {
        this.wishs.set([...this.wishs(), wish]);
      });
  }

  deleteWish(wish: Wish) {
    this.httpClient
      .delete<Wish>('http://localhost:8080/wish/delete/' + wish.id)
      .subscribe((resp) => {
        const prevWishes = this.wishs();
        this.wishs.set(prevWishes.filter((del) => del.id !== wish.id));
      });
  }

  fulfillWish(wish: Wish) {
    this.httpClient
      .put<Wish>('http://localhost:8080/wish/updated', wish)
      .subscribe((resp) => {});
  }
}
