import { Component } from '@angular/core';
import { GroupsComponent } from './groups/groups.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-secret-santa',
  imports: [GroupsComponent, MenuComponent],
  templateUrl: './secret-santa.component.html',
  styleUrl: './secret-santa.component.css',
})
export class SecretSantaComponent {}
