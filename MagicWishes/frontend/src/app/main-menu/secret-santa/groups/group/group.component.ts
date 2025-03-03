import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { NewSecretSanta } from '../secret-santa-group/create-secret-santa/create-secret-santa.model';

@Component({
  selector: 'app-group',
  imports: [],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css',
})
export class GroupComponent {
  private router = inject(Router);
  secretSanta = input.required<NewSecretSanta>();

  clickingSeeGroup() {
    this.router.navigate(['/secret-santa-group', this.secretSanta().id]);
  }
}
