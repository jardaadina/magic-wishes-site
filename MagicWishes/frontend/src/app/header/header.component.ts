import { Component, inject } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterOutlet } from '@angular/router';
import { IsnologgedComponent } from './profile/isnologged/isnologged.component';
import { RegisterService } from '../register/register.service';
import { IsloggedComponent } from './profile/islogged/islogged.component';

@Component({
  selector: 'app-header',
  imports: [
    LogoComponent,
    SearchBarComponent,
    IsnologgedComponent,
    IsloggedComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private registerService = inject(RegisterService);
  isLogged() {
    try {
      return this.registerService.getUserName() ? true : false;
    } catch (error) {
      return false;
    }
  }
}
