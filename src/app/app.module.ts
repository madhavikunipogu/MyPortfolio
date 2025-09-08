import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateOnVisibleDirective } from './directives/animateonvisible/animate-on-visible.directive';
import { ScrollAnimationDirective } from './directives/ScrollAnimation/scroll-animation.directive';
import { CountUpDirective } from './directives/count-up/count-up.directive';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    AnimateOnVisibleDirective,
    ScrollAnimationDirective,
    CountUpDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
