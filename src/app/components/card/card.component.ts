import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {


  @Input() hero: Hero = {
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


  comprar() {
    const ident = this.hero;
    console.log(`Comprando tarjeta de: \n <<< ${ident.nombre} - $ ${ident.price} >>>`);
    }

}
