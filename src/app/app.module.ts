import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {PatternsTypePipe} from './filterPatternsPipe'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
     NgbModule

  ],
  declarations: [
    AppComponent,
    PatternsTypePipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

