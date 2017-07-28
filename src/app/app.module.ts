import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrutaComponent  } from './fruta/fruta.component';


import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
