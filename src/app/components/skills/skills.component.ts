import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Skill } from '../../interfaces/skill.interface';
import { SkillComponent } from "../skill/skill.component";

@Component({
  selector: 'app-skills',
  imports: [SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent { 

  skills = input<Skill[]>();

}
