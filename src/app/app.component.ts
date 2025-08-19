import { Component } from '@angular/core';

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./sections/home/home.component";
import { AboutmeComponent } from "./sections/aboutme/aboutme.component";
import { CurriculumComponent } from "./sections/curriculum/curriculum.component";
import { ProjectsComponent } from "./sections/projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutmeComponent,
    CurriculumComponent,
    ProjectsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-portfolio-v2';
}
