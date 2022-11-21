import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BostonVilliansComponent} from "./conatainers/boston-vilians/boston-villians.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    BostonVilliansComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [DataService],
  bootstrap: [BostonVilliansComponent],
  exports: [BostonVilliansComponent]
})
export class BostonVilliansModule { }
