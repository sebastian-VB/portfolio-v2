import { Component } from '@angular/core';

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./sections/home/home.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, 
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-portfolio-v2';
}
