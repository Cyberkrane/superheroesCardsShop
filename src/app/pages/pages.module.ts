import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from '../components/list/list.component';
import { GalleryComponent } from '../components/gallery/gallery.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent
    GalleryComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
