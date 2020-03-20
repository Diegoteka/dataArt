import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { SwapiService } from 'src/app/core/services/swapi.service';
import {SelectItem} from 'primeng/api';

export interface Car {
 name,
 eye_color,
 gender,
 films
}

export interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})



export class CharacterComponent implements OnInit {

  film:any;
  characters:any;
  cars: Car[];
  selectedCity1: City;
  sortOptions: SelectItem[];
  sortKey: string;
  

  constructor(private route:ActivatedRoute, private data: DataService, private swapiService: SwapiService) {
    if (this.data.storage){
      this.characters = this.data.storage
      
      let url = this.characters[0]
      let array_url = this.characters
      
      this.swapiService.getCharacterArray(array_url).subscribe((responseList)=> {
        console.log('ARRAY PERSONAJES',responseList)
        this.cars = responseList
      })
    }
  } 

  ngOnInit(): void {

    this.sortOptions = [
      {label: 'Color Ojos', value: 'eye_color'},
      {label: 'Genero', value: 'gender'},
      {label: 'Film', value: 'films'}
  ];
   
    this.route.paramMap.subscribe(d => {
        console.log(d.get('id'))
        this.film = d.get('id')
    }); 
  
       
      
  }

 
 
}
