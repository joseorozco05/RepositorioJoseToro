import { Component, OnInit } from '@angular/core';
import {AvionDataService} from '../services/avion-data.service';
import { from } from 'rxjs';
import { Alert } from 'selenium-webdriver';
import { Avion } from '../models/avion';

@Component({
  selector: 'app-avion-add',
  templateUrl: './avion-add.component.html',
  styleUrls: ['./avion-add.component.css']
})
export class AvionAddComponent implements OnInit {

  avion: Avion;
  aviones:Avion[];

  constructor(private avionDataService:AvionDataService) { }

  ngOnInit() {
    this.avion = new Avion();
  }

  add(): void{
    if (!this.avion) { return; }
    this.avionDataService.add(this.avion)
      .subscribe( avion  => {
          alert('Agregado : =>'+avion.id);
             });
  } 
}
