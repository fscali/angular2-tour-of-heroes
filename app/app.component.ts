import { Component, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app.config';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  template: `
    Title: {{header}}
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/superheroes" routerLinkActive="active">Super Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    Footer: {{ footer }}
    `

})
export class AppComponent {
  footer: string;
  header: string;
  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.header = config.title;
    this.footer = config.footer;
   }

  title: string = 'Tour of Heroes';
}
