import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }
  
  private isOpen = true
  subscribe: Subscription
  private _sidebarOpen$ = new BehaviorSubject(this.isOpen)
  public sidebarOpen$ = this._sidebarOpen$.asObservable()


  toggleSidebar() {
    this.isOpen = !this.isOpen
    this._sidebarOpen$.next(this.isOpen)
  }
}
