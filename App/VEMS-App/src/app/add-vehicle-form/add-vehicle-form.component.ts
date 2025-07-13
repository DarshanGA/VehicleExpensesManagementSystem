import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-vehicle-form',
  imports: [],
  templateUrl: './add-vehicle-form.component.html',
  styleUrl: './add-vehicle-form.component.css'
})
export class AddVehicleFormComponent {

  @Input() shouldShowForm = false;
  @Output() formClosedEvent = new EventEmitter<void>();

  closeForm(){

    this.shouldShowForm = false;
    this.formClosedEvent.emit();
  }
}
