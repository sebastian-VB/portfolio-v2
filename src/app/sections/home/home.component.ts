import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ButtonDownloadCvComponent } from "../../components/button-download-cv/button-download-cv.component";
import * as AOS from 'aos';
import { NavBarService } from '../../services/navBar.service';

@Component({
  selector: 'app-home',
  imports: [ButtonDownloadCvComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{
  
  stateBtnService = inject(NavBarService);

  ngOnInit(): void {
    AOS.init({
      duration: 1000, 
      once: true    
    });

    // AOS.init();
  }
  
}
