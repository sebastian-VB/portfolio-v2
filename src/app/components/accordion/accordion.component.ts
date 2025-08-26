import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Work } from '../../interfaces/work.interface';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  
  work = input<Work>();
  index = input<number>(0);
  activeIndex = input<number | null>();

  toggle = output<number>();

  onToggle() {
    this.toggle.emit(this.index());
  }

  get isOpen() {
    return this.activeIndex() === this.index();
  }

}
