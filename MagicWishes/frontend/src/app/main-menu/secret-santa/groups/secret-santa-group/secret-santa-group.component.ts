import {
  Component,
  inject,
  input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { GroupsService } from '../groups.service';
import { NewSecretSanta } from './create-secret-santa/create-secret-santa.model';
import { SecretSantaGroupService } from './secret-santa-group.service';
import { RegisterService } from '../../../../register/register.service';

@Component({
  selector: 'app-secret-santa-group',
  imports: [],
  templateUrl: './secret-santa-group.component.html',
  styleUrl: './secret-santa-group.component.css',
})
export class SecretSantaGroupComponent implements OnInit {
  private groupsService = inject(GroupsService);
  private secretSantaService = inject(SecretSantaGroupService);
  private registerService = inject(RegisterService);
  id = input();
  secretSanta = this.groupsService
    .secretSantas()
    .filter((val) => val.id == this.id());
  users = this.secretSantaService.users;
  secret = this.secretSantaService.secret;

  ngOnInit(): void {
    this.secretSanta = this.groupsService
      .secretSantas()
      .filter((val) => val.id == this.id());
    this.secretSantaService.getParticipans(Number(this.id()));

    console.log('debug:', this.id());

    this.secretSantaService.getSecret(
      this.registerService.getUserId()!,
      Number(this.id())
    );
  }
}
