import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './vems-navbar.component.html',
  styleUrl: './vems-navbar.component.css'
})
export class VemsNavbarComponent {

  appShortName = "VEMS";
  appFullName = "Vehicle Expenses Management System"
}
