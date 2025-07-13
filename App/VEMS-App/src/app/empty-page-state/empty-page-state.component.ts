import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-empty-page-state',
  imports: [],
  templateUrl: './empty-page-state.component.html',
  styleUrl: './empty-page-state.component.css'
})
export class EmptyPageStateComponent {

  @Input() firstLineMessage: string = "Nothing to show here!";
  @Input() secondLineMessage: string  = "Proceed to create one.";
  @Input() linkText: string = "Create Entry";
  @Input() linkHref: string = "#";
  @Output() showVehicleFormEvent = new EventEmitter<void>();

  triggerOpenFormEvent(){

    this.showVehicleFormEvent.emit();
  }
}
