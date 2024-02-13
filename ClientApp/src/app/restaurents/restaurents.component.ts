import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-restaurents',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './restaurents.component.html',
  styleUrl: './restaurents.component.css'
})
export class RestaurentsComponent {

}
