import { Component } from '@angular/core';
import { HireMeCardComponent } from "./hire-me-card/hire-me-card.component";

@Component({
    selector: 'app-hire-me',
    standalone: true,
    templateUrl: './hire-me.component.html',
    styleUrl: './hire-me.component.css',
    imports: [HireMeCardComponent]
})
export class HireMeComponent {

}
