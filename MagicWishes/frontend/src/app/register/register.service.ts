import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private router = inject(Router);
  private httpClient = inject(HttpClient);
  private url = 'http://localhost:8080/user';
  private user: User | undefined;
  private id: number | undefined;

  getUserName() {
    return this.user!.name;
  }

  getUserId() {
    return this.id;
  }

  logOut() {
    this.user = undefined;
    this.id = undefined;
  }

  async logIn(email: string, password: string): Promise<User | undefined> {
    try {
      const response = await lastValueFrom(
        this.httpClient.get<any>(
          `http://localhost:8080/user/login/${email}/${password}`
        )
      );

      this.user = response;
      this.id = response.id;
      return response;
    } catch (error) {
      return undefined;
    }
  }

  async signUp(user: User): Promise<boolean | undefined> {
    const emailExistsPromise = this.userWithSameEmailAlreadyExists(user.email);
    emailExistsPromise.then(async (exists) => {
      if (exists) {
        return false;
      } else {
        this.registerNewUser(user);
        this.user = user;
        return true;
      }
    });

    return emailExistsPromise;
  }

  private registerNewUser(user: User) {
    this.httpClient
      .post<any>('http://localhost:8080/user/add', user)
      .subscribe((resp) => {
        this.id = resp.id;
      });
  }

  private async userWithSameEmailAlreadyExists(
    email: string
  ): Promise<boolean> {
    try {
      const response = await lastValueFrom(
        this.httpClient.get<boolean>(
          `http://localhost:8080/user/exists/${email}`
        )
      );
      return response;
    } catch (error) {
      return false;
    }
  }
}
