import { Injectable } from '@angular/core';
import { Species, SpeciesResponse } from '../Types/Species';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  BASE_URL = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getSpecies(): Observable<SpeciesResponse> {
    return this.http.get<SpeciesResponse>(this.BASE_URL + 'species');
  }
}
