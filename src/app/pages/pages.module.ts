import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { CardComponent } from '../components/card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    GalleryComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
