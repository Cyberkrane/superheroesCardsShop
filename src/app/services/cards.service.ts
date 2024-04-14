import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  heroes_avengers: Hero[] = [
    {
      "nombre": "Iron Man",
      "img":"../assets/imgs/ironman.jpg",
      "alter_ego": "Tony Stark",
      "poder_principal": "Tecnología avanzada y armadura Iron Man",
      "edad": 50,
      "origen": "Estados Unidos",
      "price": 14.99,
      "inStock":false,
      "amount":10,
    },
    {
      "nombre": "Captain America",
      "img":"../assets/imgs/captainAmerica.jpg",
      "alter_ego": "Steve Rogers",
      "poder_principal": "Super fuerza, agilidad y resistencia",
      "edad": 100,
      "origen": "Estados Unidos",
      "price": 11.99,
      "inStock":false,
      "amount":20,
    },
    {
      "nombre": "Thor",
      "img":"../assets/imgs/thor.jpg",
      "alter_ego": "Thor Odinson",
      "poder_principal": "Control sobre el rayo y fuerza sobrehumana",
      "edad": 1500,
      "origen": "Asgard",
      "price": 12.99,
      "inStock":false,
      "amount":20,
    },
    {
      "nombre": "Hulk",
      "img":"../assets/imgs/hulk.jpg",
      "alter_ego": "Bruce Banner",
      "poder_principal": "Fuerza sobrehumana y resistencia regenerativa",
      "edad": 40,
      "origen": "Estados Unidos",
      "price": 9.99,
      "inStock":false,
      "amount":20,
    },
    {
      "nombre": "Black Widow",
      "img":"../assets/imgs/blackWidow.jpg",
      "alter_ego": "Natasha Romanoff",
      "poder_principal": "Maestría en combate cuerpo a cuerpo y habilidades de espionaje",
      "edad": 35,
      "origen": "Rusia",
      "price": 14.99,
      "inStock":false,
      "amount":20,
    },
    {
      "nombre": "Hawkeye",
      "img":"../assets/imgs/hawkeye.jpg",
      "alter_ego": "Clint Barton",
      "poder_principal": "Experto arquero y habilidades de combate",
      "edad": 45,
      "origen": "Estados Unidos",
      "price": 10.99,
      "inStock":false,
      "amount":20,
    }
  ]

  constructor() { }

  getAllHeroes(){
    return this.heroes_avengers;
  }
}
