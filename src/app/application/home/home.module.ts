


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


import {CarouselModule} from 'primeng/carousel';  
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';  


import { SwapiService } from 'src/app/core/services/swapi.service';
import { CharacterComponent } from './character/character.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [HomeComponent, CharacterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    DataViewModule,
    DropdownModule,
    FormsModule,
  ],
  providers:[
    SwapiService
  ]
})
export class HomeModule { }
