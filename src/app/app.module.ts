import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HighlightDirective} from './directive/highlight.directive';
import { TestingComponent } from './testing/testing.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { DirectiveComponent } from './directive/directive.component';
import { TransclusionComponent } from './transclusion/transclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TestingComponent,
    KeyframesComponent,
    DirectiveComponent,
    TransclusionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
