import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-hire-me-card',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatCardModule],
  templateUrl: './hire-me-card.component.html',
  styleUrl: './hire-me-card.component.css'
})
export class HireMeCardComponent {

}
