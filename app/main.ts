/*
 * Angular
 */
import {Component} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {AppComponent} from './app.component';
import {Store, provideStore} from '@ngrx/store';


import {people} from './people';
import {filter} from './filter';

import {Observable} from "rxjs/Observable";

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provideStore({people, filter})
]);
