import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  response: any = [];
  _URL_FILMS = `api/films/`;

  constructor(private httpClient: HttpClient) { }

  getAllFilms(): Observable<any> {
    return this.httpClient.get<any>(`${this._URL_FILMS}`)
  }

  getFilm(film): Observable<any> {
    return this.httpClient.get<any>(film)
  }

  getCharacter(film): Observable<any> {
    return this.httpClient.get<any>(film)
  }

  getCharacterArray(array_url): Observable<any[]> {
    console.log('paso1',array_url)
    for (let numero of array_url) {
      this.response.push(this.httpClient.get<any>(numero))
    }
    return forkJoin(this.response);

  }
}