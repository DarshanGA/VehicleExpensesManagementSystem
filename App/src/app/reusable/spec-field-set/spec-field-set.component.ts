import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-spec-field-set',
  imports: [],
  templateUrl: './spec-field-set.component.html',
  styleUrl: './spec-field-set.component.css'
})
export class SpecFieldSetComponent {

  @Input({required: true}) specFieldSetIndex = 0;
  @Input({required: true}) specFieldSetPosition = 1;
  @Output() removeSpecSetEvent = new EventEmitter<number>();

  removeSpecFieldSetByIndex(){

    this.removeSpecSetEvent.emit(this.specFieldSetIndex);
  }
}
