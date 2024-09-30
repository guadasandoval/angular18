import { Component, input, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule, MatInputModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  ngOnInit(): void {}


}
