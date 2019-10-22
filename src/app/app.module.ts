import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HighlightDirective} from './directive/highlight.directive';
import { TestingComponent } from './testing/testing.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TestingComponent,
    KeyframesComponent,
    DirectiveComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
