import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 

  showMenu = false;
  hidingMenu = false;

  openMenu() {
    this.showMenu = true;
    this.hidingMenu = false;
  }

  closeMenu() {
    this.hidingMenu = true;
    setTimeout(() => {
      this.showMenu = false;
      this.hidingMenu = false;
    }, 600);
  }

}
