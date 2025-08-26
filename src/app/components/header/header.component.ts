import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { NavBarService } from '../../services/navBar.service';
import { MenuElements } from '../../interfaces/menu-element.interface';

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

  isFixed = false;
  isVisible = false;
  isAtTop = true;

  private threshold = 200;
  
  public elementsMenuMobile: MenuElements[] = [
    {name: 'home', link: '#home'},
    {name: 'aboutme', link: '#aboutme'},
    {name: 'experience', link: '#experience'},
    {name: 'projects', link: '#projects'},
    {name: 'contact', link: '#contact'},
  ];
  selectedIndex = 0;

  openMenu() {
    this.showMenu = true;
    this.hidingMenu = false;
    this.stateBtnService.setStateBtn(this.showMenu);

    document.body.classList.add('no-scroll');
  }

  closeMenu() {
    this.hidingMenu = true;
    setTimeout(() => {
      this.showMenu = false;
      this.hidingMenu = false;
      this.stateBtnService.setStateBtn(this.showMenu);

      document.body.classList.remove('no-scroll');
    }, 600);
  }

  navigateAndClose(event: Event, targetId: string, index: number) {
    event.preventDefault();
    this.closeMenu();
    this.changeClass(index);
    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' }); 
      }
    }, 600);
  }

  changeClass(index: number){
    this.selectedIndex = index;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > this.threshold) {
      this.isFixed = true;
      (scrollY > 300) ? this.isVisible = true : this.isVisible = false;
    } else {
      this.isFixed = false;
    }
  }

}
