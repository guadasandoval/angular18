import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../core/models/character';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {

  private apiService = inject(ApiService)
  character$: Observable<Character[]> = this.apiService.getAllCharacters();
}
