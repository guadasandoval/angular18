import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Character } from '../../core/models/character';
import { ApiService } from '../../services/api.service';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage, CharacterCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {
  
  private apiService = inject(ApiService)
  characters$: Observable<Character[]> = this.apiService.getAllCharacters();
  characterDetails: Record<string, Character> = {}; //objeto clave-valor
  
  //firsValueFrom es un metodo de rxjs, para llamar al primer observable, obtener el
  //primer valor y despues desuscribirse
  async makeCallApi(url:string){
    let char = await firstValueFrom(this.apiService.getCharacterInformation(url));
    this.characterDetails[char.id] = char;
  }
}
