import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
