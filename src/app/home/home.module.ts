import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    NgxCarouselModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
