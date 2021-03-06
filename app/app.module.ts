import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule}     from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service';
import { Logger } from './logger.service';
import { EvenBetterLogger } from './even-better-logger.service';
import { UserService } from './user.service';

import { APP_CONFIG, HERO_DI_CONFIG } from './app.config';

import { SuperHeroFormComponent } from './super-hero-form.component';

import { RouterModule} from '@angular/router';

import './rxjs-extensions';



@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService)
                ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroSearchComponent, SuperHeroFormComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService, UserService, /*Logger*/, {provide: Logger, useClass: EvenBetterLogger} , {provide: APP_CONFIG, useValue: HERO_DI_CONFIG} ]
})
export class AppModule { }
