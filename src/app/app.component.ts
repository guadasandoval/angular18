import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainContainerComponent } from './components/main-container/main-container.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainContainerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rick-and-morty';
}
