import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { AjoutComponent } from './ajout/ajout.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
