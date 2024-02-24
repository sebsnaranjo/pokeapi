import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-cards',
  templateUrl: './poke-cards.component.html',
  styleUrls: ['./poke-cards.component.css']
})
export class PokeCardsComponent implements OnInit {

  pokemons: any[] = [];
  data: any[] = [];

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

/*   getPokemons(){
    for(let i = 1; i < 36; i++){
      this.pokeService.getPokemons(i).subscribe(data => {
        this.pokemons = data.results;
        console.log(this.pokemons)
      })
    }
  } */

  getPokemons(){
    let pokemonData;

    for(let i = 1; i < 10; i++){
      this.pokeService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            pokemons: res,
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };
          this.data.push(pokemonData);
        },
        err => {
          console.log(err)
        }
      )
    }

    console.log(this.data);
  }

}
