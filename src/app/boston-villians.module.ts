import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BostonVilliansComponent } from './boston-villians.component';

@NgModule({
  declarations: [
    BostonVilliansComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BostonVilliansComponent],
  exports: [BostonVilliansComponent]
})
export class BostonVilliansModule { }
