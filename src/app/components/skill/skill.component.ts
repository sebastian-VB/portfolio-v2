import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Skill } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent { 

  skill = input.required<Skill>();

}
