import { Component, inject, OnInit } from '@angular/core';
import { GroupComponent } from './group/group.component';
import { GroupsService } from './groups.service';

@Component({
  selector: 'app-groups',
  imports: [GroupComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css',
})
export class GroupsComponent implements OnInit {
  private groupsService = inject(GroupsService);
  private secretSantas = this.groupsService.secretSantas;
  santas = this.secretSantas.asReadonly();

  ngOnInit(): void {
    this.secretSantas.set([]);
    this.groupsService.getGroups();
    this.secretSantas = this.groupsService.secretSantas;
  }
}
