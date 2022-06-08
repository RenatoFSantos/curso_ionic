import { Component } from '@angular/core';
import { listenerCount } from 'process';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuCollection = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Button', url: '/button', icon: 'dice' },
    { title: 'Card', url: '/card', icon: 'qr-code' },
  ];
  constructor() { }
}
