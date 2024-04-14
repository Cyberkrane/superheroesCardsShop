import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  heroes : Hero[]=[];
  constructor(private heroservice: CardsService  ){

}

ngOnInit(){
this.heroes = this.heroservice.getAllHeroes();
}
















}

