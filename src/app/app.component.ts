import { Component } from '@angular/core';

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./sections/home/home.component";
import { AboutmeComponent } from "./sections/aboutme/aboutme.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutmeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-portfolio-v2';
}
