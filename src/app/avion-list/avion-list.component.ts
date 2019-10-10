import { Component, OnInit } from '@angular/core';
import { Avion } from '../models/avion';
import {AvionDataService} from '../services/avion-data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-avion-list',
  templateUrl: './avion-list.component.html',
  styleUrls: ['./avion-list.component.css']
})
export class AvionListComponent implements OnInit {

  aviones: Avion[];

  constructor(private avionDataService: AvionDataService) { }

  ngOnInit() {
    this.getAll(); 
  }

  getAll() {
    this.avionDataService.getAvion().subscribe( aviones => {
      return this.aviones = this.aviones;
    });
    }

}
