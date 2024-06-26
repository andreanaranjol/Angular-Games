import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRoutingModule } from './css-routing.module';
import { CssComponent } from './css.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    CssComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
