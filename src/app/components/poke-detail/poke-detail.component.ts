import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';

  constructor(private pokemonService: PokemonService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {

  }

  getPokemon(id: any) {
    this.pokemonService.getPokemons(id).subscribe( 
      data => {
        this.pokemon = data;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = data.types[0].type.name; 
      },
      err => {
        console.log(err);
      })
  }



}
