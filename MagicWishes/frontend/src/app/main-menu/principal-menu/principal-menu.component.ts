import { Component } from '@angular/core';
import { WishesComponent } from './wishes/wishes.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-principal-menu',
  imports: [WishesComponent, MenuComponent],
  templateUrl: './principal-menu.component.html',
  styleUrl: './principal-menu.component.css',
})
export class PrincipalMenuComponent {}
