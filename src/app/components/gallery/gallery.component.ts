import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  heroGroup: Hero[] = [];
  hero: Hero;

  constructor(private cardsService: CardsService) {
    this.hero = {
        nombre:'',
        img:'',
        alter_ego:'',
        poder_principal:'',
        edad:0,
        origen:'',
        price: 0,
        inStock:false,
        amount:0,

    }
  }

  ngOnInit(): void {
    this.heroGroup = this.cardsService.getAllHeroes();
  }

}
