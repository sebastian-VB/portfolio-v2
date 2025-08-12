import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavBarService } from '../../services/navBar.service';

@Component({
  selector: 'app-button-download-cv',
  imports: [],
  templateUrl: './button-download-cv.component.html',
  styleUrl: './button-download-cv.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDownloadCvComponent { 

  stateBtnService = inject(NavBarService);

}
