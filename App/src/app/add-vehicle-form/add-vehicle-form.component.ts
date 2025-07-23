import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpecFieldSetComponent } from "../reusable/spec-field-set/spec-field-set.component";
import { VCFDropdownDataService } from '../services/vehicle-creation.services';
import { VehicleType } from '../models/vehicle-type.model';
import { FuelType } from '../models/fuel-type.model';
import { ImageSelectionComponent } from "../image-selection/image-selection.component";
import { imageDimentionsForCard } from '../../utils/image.utils';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-vehicle-form',
  imports: [ReactiveFormsModule, SpecFieldSetComponent, ImageSelectionComponent],
  templateUrl: './add-vehicle-form.component.html',
  styleUrl: './add-vehicle-form.component.css'
})
export class AddVehicleFormComponent {

  @Output() formClosedEvent = new EventEmitter<void>();

  form!: FormGroup;
  addVehicleFormTitle = "Add a Vehicle";
  vehicleTypeMandatorWarning = "Vehicle Type selection is mandatory";
  fuelTypeMandatoryWarning = "Fuel Type selection is mandatory";
  vehicleTypesOption: VehicleType[] = new Array<VehicleType>();
  fuelTypeOptions: FuelType[] = new Array<FuelType>();
  specFieldSetList: number[] = [1];
  selectedImage: File | null = null;
  previewUrl: SafeUrl | string = "../../assets/defaults/BikeDefaultImage.jpg";
  showPreview = false;
  previewDim = imageDimentionsForCard.widthInPx;
  
  constructor(private fb: FormBuilder,
    private dropdownService: VCFDropdownDataService) { }

  ngOnInit(): void {

    this.dropdownService.getAllVehicleTypes().subscribe({

      next: (data) => { this.vehicleTypesOption = data; },
      error: (er) => { console.warn("Failed to load the vehicle type dropdown data from API", er); }
    });

    this.dropdownService.getAllFuelTypes().subscribe({
      next: (response) => { this.fuelTypeOptions = response; },
      error: (er) => { console.warn("Something went worng while getting fuel types!", er); }
    });

    this.form = this.fb.group({

      vehicleType: ['', Validators.required],
      fuelType: ['', Validators.required],
      vehicleName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      vehicleDescription: ['', Validators.maxLength(255)]
    });
  }

  closeForm() {

    this.formClosedEvent.emit();
  }

  addSepecFieldSet() {

    const lastNumber = this.specFieldSetList.at(-1);
    if (lastNumber) {

      this.specFieldSetList.push(lastNumber + 1);
    }
    else {

      this.specFieldSetList.push(1);
    }
  }

  removeLastSpecFieldSet() {

    if (!(this.specFieldSetList.length - 1 <= 0)) {

      this.specFieldSetList.pop();
    }
  }

  getSpecificationsCount() {

    return this.specFieldSetList.length;
  }

  removeSpecificFieldSet(secNumber: number) {

    if (!(this.specFieldSetList.length - 1 <= 0)) {

      this.specFieldSetList.splice(this.specFieldSetList.indexOf(secNumber), 1);
    }
  }

  submitVehicleCreationData() {

    if (this.form.valid) {

      console.log(this.form.value);
    }
    else {

      this.form.markAllAsTouched();
    }
  }

  // a method that lisens for clear image event from preview and clears the current image selection.
  clearImageSelection(): void {

    this.showPreview = false;
  }

  closeCropper(event: SafeUrl | string){

    this.showPreview = true;
    this.previewUrl = event
  }
}