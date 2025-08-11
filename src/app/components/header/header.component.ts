import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavBarService } from '../../services/navBar.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 

  stateBtnService = inject(NavBarService);

  showMenu = false;
  hidingMenu = false;

  openMenu() {
    this.showMenu = true;
    this.hidingMenu = false;
    this.stateBtnService.setStateBtn(this.showMenu);
  }

  closeMenu() {
    this.hidingMenu = true;
    setTimeout(() => {
      this.showMenu = false;
      this.hidingMenu = false;
      this.stateBtnService.setStateBtn(this.showMenu);
    }, 600);
  }

}
