import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonDownloadCvComponent } from "../../components/button-download-cv/button-download-cv.component";

@Component({
  selector: 'app-home',
  imports: [ButtonDownloadCvComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent{
  
}
