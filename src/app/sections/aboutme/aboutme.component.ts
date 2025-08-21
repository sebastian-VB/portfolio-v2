import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillsComponent } from "../../components/skills/skills.component";
import { Skill } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-aboutme',
  imports: [SkillsComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutmeComponent { 

  public greeting: string = 'Hola, soy Sebastián. Gusto en conocerte.';
  public info: string = 'Bachiller en Ingeniería Informática, con 2 años de experiencia en el Desarrollo de Software, interviniendo en la creación de funcionalidades para aplicaciones web, además de apoyar en la certificación de soluciones realizadas en sistemas de una empresa bancaria. Apasionado por la tecnología, interesado en aprender y aportar nuevas soluciones para la optimización de tareas anteriormente manuales y lentas.';
  
  public listSkills: Skill[] = [
    {
      imageUrl: './images/skills/html.webp',
      title: 'HTML',
      id: 1,
      level: 'Avanzado'
    },
    {
      imageUrl: './images/skills/css.webp',
      title: 'CSS',
      id: 2,
      level: 'Avanzado'
    },
    {
      imageUrl: './images/skills/javascript.webp',
      title: 'JAVSCRIPT',
      id: 3,
      level: 'Intermedio'
    },
    {
      imageUrl: './images/skills/typescript.webp',
      title: 'TYPESCRIPT',
      id: 4,
      level: 'Intermedio'
    },
    {
      imageUrl: './images/skills/angular.webp',
      title: 'ANGULAR',
      id: 5,
      level: 'Avanzado'
    },
    {
      imageUrl: './images/skills/bootstrap.webp',
      title: 'BOOTSTRAP',
      id: 6,
      level: 'Avanzado'
    },
    {
      imageUrl: './images/skills/tailwind.webp',
      title: 'TAILWIND',
      id: 7,
      level: 'Avanzado'
    },
    {
      imageUrl: './images/skills/php.webp',
      title: 'PHP',
      id: 8,
      level: 'Básico'
    },
    {
      imageUrl: './images/skills/symfony.webp',
      title: 'SYMFONY',
      id: 9,
      level: 'Intermedio'
    },
    {
      imageUrl: './images/skills/mysql.webp',
      title: 'MYSQL',
      id: 10,
      level: 'Intermedio'
    },
  ];

}
