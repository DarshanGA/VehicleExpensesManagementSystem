import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-spec-field-set',
  imports: [],
  templateUrl: './spec-field-set.component.html',
  styleUrl: './spec-field-set.component.css'
})
export class SpecFieldSetComponent {

  @Input({required: true}) specFieldSetIndex = 1;
  @Output() removeSpecSetEvent = new EventEmitter<number>();

  removeSpecFieldSetByIndex(){

    console.log(`From child: Emitting close/remove spec field set - ${this.specFieldSetIndex}`);
    this.removeSpecSetEvent.emit(this.specFieldSetIndex);
  }
}
