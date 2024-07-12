import { Component } from '@angular/core';
import { ProjectCardComponent } from "./project-card/project-card.component";

@Component({
    selector: 'app-project',
    standalone: true,
    templateUrl: './project.component.html',
    styleUrl: './project.component.css',
    imports: [ProjectCardComponent]
})
export class ProjectComponent {

}
