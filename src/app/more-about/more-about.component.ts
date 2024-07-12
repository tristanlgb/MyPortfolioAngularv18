import { Component } from '@angular/core';
import { MoreAboutCardComponent } from "./more-about-card/more-about-card.component";

@Component({
    selector: 'app-more-about',
    standalone: true,
    templateUrl: './more-about.component.html',
    styleUrl: './more-about.component.css',
    imports: [MoreAboutCardComponent]
})
export class MoreAboutComponent {

}
