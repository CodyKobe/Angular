import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HighlightDirective} from './highlight.directive';
import { TestingComponent } from './testing/testing.component';
import { KeyframesComponent } from './keyframes/keyframes.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TestingComponent,
    KeyframesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
