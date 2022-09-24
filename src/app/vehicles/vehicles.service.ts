import { Injectable } from '@angular/core';
import { Vehicle, VehicleResponse } from '../Types/Vehicle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  BASE_URL = "https://swapi.dev/api/";

  constructor(private http: HttpClient) { }

  getVehicle(): Observable<VehicleResponse> {
    return this.http.get<VehicleResponse>(this.BASE_URL + 'vehicles');
  }
}
