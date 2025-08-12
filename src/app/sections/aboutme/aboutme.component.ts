import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillsComponent } from "../../components/skills/skills.component";

@Component({
  selector: 'app-aboutme',
  imports: [SkillsComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutmeComponent { 

  public greeting: string = 'Hola, soy Sebastián. Gusto en conocerte.';
  public info: string = 'Bachiller en Ingeniería Informática, cerca de 2 años de experiencia en el Desarrollo de Software, interviniendo en la creación de funcionalidades para aplicaciones web, además de apoyar en la certificación de soluciones realizadas en sistemas de una empresa bancaria. Apasionado por la tecnología, interesado en aprender y aportar nuevas soluciones para la optimización de tareas anteriormente manuales y lentas.';
  
}
