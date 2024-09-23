import { JsonPipe, NgOptimizedImage } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { Character } from '../../core/models/character';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [NgOptimizedImage, JsonPipe],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent  implements OnInit{
 
  character = input.required<Character>();
  characterInfo = input<Character>();
  loaded = output<string>();
 
  ngOnInit(): void {
    this.loaded.emit(this.character().url)
  }
}
