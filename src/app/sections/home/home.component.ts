import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NavBarService } from '../../services/navBar.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent{
  
  stateBtnService = inject(NavBarService);
  // stateBtn:boolean = this.stateBtnService.stateBtn();
  
}
