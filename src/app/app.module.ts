
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvionListComponent } from './avion-list/avion-list.component';
import { AvionAddComponent } from './avion-add/avion-add.component';

import {AvionDataService} from './services/avion-data.service';
import{ FormsModule} from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    AvionListComponent,
    AvionAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [AvionDataService,InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
