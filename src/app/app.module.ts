import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextColorDirective } from './text-color.directive';
import { TextColor2Directive } from './text-color2.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextColorDirective,
    TextColor2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
