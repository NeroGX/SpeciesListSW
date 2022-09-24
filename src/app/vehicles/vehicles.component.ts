import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../Types/Vehicle';
import { VehiclesService } from './vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.getVehicle()
  }

  getVehicle(): void {
    this.vehiclesService.getVehicle()
    .subscribe(data => {
      this.vehicles = data.results;
    })
  }

}
