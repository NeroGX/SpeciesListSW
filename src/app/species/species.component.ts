import { Component, OnInit } from '@angular/core';
import { Species } from '../Types/Species';
import { SpeciesService } from './species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species: Species[] = [];

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.getSpecies();
  }

  getSpecies(): void {
    this.speciesService.getSpecies()
    .subscribe(data => {
      this.species = data.results;
    })
  }
}
