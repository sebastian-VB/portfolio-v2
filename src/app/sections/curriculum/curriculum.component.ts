import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccordionComponent } from "../../components/accordion/accordion.component";
import { Work } from '../../interfaces/work.interface';
import * as AOS from 'aos';

@Component({
  selector: 'app-curriculum',
  imports: [AccordionComponent],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurriculumComponent implements OnInit{ 

  public works: Work[] = [
    {
      logo: './images/works/Venkizmet.webp',
      company: 'Venkizmet',
      job: 'Desarrollador web',
      description: 'Se trabajó en un DEMO para la participación de la empresa en un concurso para realizar el sistema de un banco de Centro América. Se analizaron interfaces gráficas de un sistema antiguo, se realizó el diseño de la BD y desarrollé parte del frontend en ANGULAR.',
      address: 'Lima, Perú',
      technologies: ['HTML', 'TAILWIND CSS', 'ANGULAR'],
      workinTime: 'Setiembre 2022 - Diciembre 2022',
      mode: 'remoto'
    },
    {
      logo: './images/works/Caja-sullana.webp',
      company: 'Caja Sullana',
      job: 'Certificador de Software',
      description: 'Trabajé en la ejecución de nuevas funcionalidades en ambientes de testing en sistemas de la entidad. Revisé el código escrito y elaboré informenes sobre el estado de la implementación, utilizando herramientas de pruebas para la revisión y pruebas de vulnerabilidades.',
      address: 'Sullana - Perú',
      technologies: ['OWASP', 'JAVA', 'JAVASCRIPT', 'ORACLE DB'],
      workinTime: 'Setiembre 2023 - Julio 2024 ',
      mode: 'remoto'
    },
    {
      logo: './images/works/Pidia.webp',
      company: 'Pidia',
      job: 'Desarrollador web',
      description: 'Trabajé en el desarrollo del modulo de finanzas de un sistema para una cooperativa (cliente de la empresa) que exporta café. Se implementó la acción para registrar, actualizar, mostrar y listar, ademas de un reporte. También en una funcionalidad del modulo de calidad, agregar, actualizar, mostrar y listar, así como poder imprimir en un formato mostrando un gráfico.',
      address: 'Piura - Perú',
      technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'PHP', 'SYMFONY', 'MYSQL'],
      workinTime: 'Mayo 2025 - Julio 2025 ',
      mode: 'remoto'
    },
  ];

  activeIndex: number | null = null;

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  ngOnInit(): void {
      AOS.init();
  }

}
