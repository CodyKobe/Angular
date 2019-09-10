import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HighlightDirective} from './highlight.directive';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TestingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
