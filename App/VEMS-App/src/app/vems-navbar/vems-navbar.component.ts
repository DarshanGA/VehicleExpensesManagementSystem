import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './vems-navbar.component.html',
  styleUrl: './vems-navbar.component.css'
})
export class VemsNavbarComponent {

  appShortName = "VEMS";
  appFullName = "Vehicle Expenses Management System";
  @Output() openFormEvent = new EventEmitter<void>();

  openAddVehicleForm(){

    //console.log("From Child: You have clicked add vehicles nav button and the event trigger method has been called.");
    this.openFormEvent.emit();
  }
}
