import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { fuelTypeDropdownOptions, vehicleTypeDropdownOptions } from '../../../temp_data/fuelTypeDropdown.data';
import { SpecFieldSetComponent } from "../reusable/spec-field-set/spec-field-set.component";

@Component({
  selector: 'app-add-vehicle-form',
  imports: [ReactiveFormsModule, SpecFieldSetComponent],
  templateUrl: './add-vehicle-form.component.html',
  styleUrl: './add-vehicle-form.component.css'
})
export class AddVehicleFormComponent {

  @Output() formClosedEvent = new EventEmitter<void>();

  form!: FormGroup;
  addVehicleFormTitle = "Add a Vehicle";
  vehicleTypeMandatorWarning = "Vehicle Type selection is mandatory";
  fuelTypeMandatoryWarning = "Fuel Type selection is mandatory";
  vehicleTypesOption = vehicleTypeDropdownOptions;
  fuelTypeOptions = fuelTypeDropdownOptions;
  specFieldSetList: number[] = [1];

  constructor(private fb: FormBuilder){  }

  ngOnInit(): void{

    this.form = this.fb.group({

      vehicleType: ['', Validators.required],
      fuelType: ['', Validators.required],
      vehicleName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      vehicleDescription: ['', Validators.maxLength(255)]
    });
  }

  closeForm(){

    this.formClosedEvent.emit();
  }

  addSepecFieldSet(){

    this.specFieldSetList.push(this.specFieldSetList.length + 1);
  }

  removeLastSpecFieldSet(){

    if(!(this.specFieldSetList.length - 1 <= 0)){

      this.specFieldSetList.pop();
    }
  }

  getSpecificationsCount(){

    return this.specFieldSetList.length;
  }

  removeSpecificFieldSet(index: number){

    if(!(this.specFieldSetList.length - 1 <= 0)){

      this.specFieldSetList.splice(index - 1, 1);
    }
  }
}
