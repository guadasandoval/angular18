import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CharacterAdapter } from '../adapters/character.adapter';
import { Character, CharacterInfo } from '../core/models/character';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = 'https://rickandmortyapi.com/api/'
  private charactersUrl = this.BASE_URL + 'character'
  private httpClient = inject(HttpClient)
  data: any[] = []

  getAllCharacters():Observable<Character[]>{
    return this.httpClient.get<CharacterInfo>(this.charactersUrl)
    .pipe(map((result:CharacterInfo)=> CharacterAdapter(result)))
  }

  getCharacterInformation(url:string) : Observable<any>{
    return this.httpClient.get<Character>(url)
  } 
}
