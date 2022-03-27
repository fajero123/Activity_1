import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstNavigationComponent } from './first-navigation/first-navigation.component';
import { SecondNavigationComponent } from './second-navigation/second-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNavigationComponent,
    SecondNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
