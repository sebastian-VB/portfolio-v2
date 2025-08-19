import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { CardProjectComponent } from "../../components/card-project/card-project.component";

@Component({
  selector: 'app-projects',
  imports: [CardProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent { 

  public projects: Project[] = [
    {
      imageUrl: './images/projects/game-app.webp',
      projectName: 'Games App',
      technologies: ['HTML', 'CSS', 'TYPESCRIPT', 'ANGULAR', 'TAILWIND CSS'],
      repositoryUrl: 'https://github.com/sebastian-VB/games-page',
    },
    {
      imageUrl: './images/projects/mediments.webp',
      projectName: 'Mediments',
      technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOSTRATP', 'PHP', 'SYMFONY', 'MYSQL'],
      repositoryUrl: 'https://github.com/sebastian-VB/MediMents',
    },
    {
      imageUrl: './images/projects/country-app.webp',
      projectName: 'Country App',
      technologies: ['HTML', 'CSS', 'TYPESCRIPT' , 'ANGULAR', 'TAILWIND CSS', 'DAISY UI'],
      repositoryUrl: 'https://github.com/sebastian-VB/country-app-v2',
    },
    {
      imageUrl: './images/projects/hero-app.webp',
      projectName: 'Heroes App - CRUD',
      technologies: ['HTML', 'CSS', 'TYPESCRIPT' , 'ANGULAR', 'ANGULAR MATERIAL', 'PRIMEFLEX'],
      repositoryUrl: 'https://github.com/sebastian-VB/heores-app',
    }
  ];

}
