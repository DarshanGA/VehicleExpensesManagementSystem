import { Component, inject, Input, OnInit } from '@angular/core';
import { VemsNavbarComponent } from "./vems-navbar/vems-navbar.component";
import { EmptyPageStateComponent } from './empty-page-state/empty-page-state.component';
import { AddVehicleFormComponent } from './add-vehicle-form/add-vehicle-form.component';
import { ApiHealthCheckService } from './services/api-health-check.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [VemsNavbarComponent, EmptyPageStateComponent, AddVehicleFormComponent]
})

export class AppComponent implements OnInit{
  
  title = 'VEMS';
  @Input() isFormDisplayed: boolean = false;
  private healthCheck = inject(ApiHealthCheckService);
  private toast = inject(ToastrService);
  
  ngOnInit(): void {

    this.healthCheck.checkApiHealth().subscribe((res: any) => {

      if(!res.healthy){

        this.toast.error("API connection error, having trouble connecting!", "Connection Error", {timeOut: 10000});
      }
    });
  }

  //gonna reove this later.
  defaultImageForCards = ["PickupTruckDefautImage.jpg", "TruckDefaultImage.jpg", 
    "BikeDefaultImage.jpg", "CarDefaultImage.jpg", "ExcavatoryDefaultImage.jpg",
     "OtherVehiclesDefaultImage.jpg", "TractorDefaultImage.jpg"]

  showForm() {

    //console.log("On Parent: Recived open form even from nav bar, child!");
    this.isFormDisplayed = true;
  }

  closeForm() {

    //console.log("On Parent: Recived close form even from model, child!");
    this.isFormDisplayed = false;
  }
}
