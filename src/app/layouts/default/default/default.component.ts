import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  subscribe: Subscription
  sideBarOpen$!: boolean;

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.subscribe = this.layoutService.sidebarOpen$.subscribe(res => this.sideBarOpen$ = res)
  }



  toggleSidebar() {
this.layoutService.toggleSidebar()
  }

}
