import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { aboutRouter } from "./about.router";

@NgModule({
  imports: [
    CommonModule,
    aboutRouter
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }