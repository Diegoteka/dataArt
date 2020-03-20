import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwapiService } from 'src/app/core/services/swapi.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  films: any[];
  characters:any[];
  navigationParameters:any[];
  responsiveOptions;

  constructor(private swapiService: SwapiService, private router:Router,  private data: DataService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit() {
    this.swapiService.getAllFilms().subscribe((val) => {
      this.films = val.results
    })
  }

  getCharacters(film:any){
   this.swapiService.getFilm(film).subscribe((val) => {
      this.data.storage = val.characters
      this.router.navigate(['/character'])
    }) 
  }

  showInitialText(text){
    alert(text)
  }


}




