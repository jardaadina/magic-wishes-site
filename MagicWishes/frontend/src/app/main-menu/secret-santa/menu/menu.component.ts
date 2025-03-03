import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GroupsService } from '../groups/groups.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  private router = inject(Router);

  clickingCreateSecretSanta() {
    this.router.navigate(['/create-secret-santa']);
  }
}
