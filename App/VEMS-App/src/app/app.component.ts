import { Component } from '@angular/core';
import { VemsNavbarComponent } from "./vems-navbar/vems-navbar.component";
import { EmptyPageStateComponent } from './empty-page-state/empty-page-state.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [VemsNavbarComponent, EmptyPageStateComponent]
})
export class AppComponent {
  title = 'VEMS';
}
