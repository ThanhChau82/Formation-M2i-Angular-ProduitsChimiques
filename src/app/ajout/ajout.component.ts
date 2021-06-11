import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  produit : Produit;
  @Output() ajoutProduit = new EventEmitter<Produit>();

  constructor() {
    this.produit = <Produit>{};
  }

  ngOnInit(): void {
  }

  ajouter(f : NgForm) {
    console.log(f);
    this.produit = new Produit(f.value.id, f.value.nom, f.value.cas, f.value.formule, f.value.masseMoleculaire, f.value.description, f.value.quantite, f.value.localisation);
    console.log(this.produit);
    this.ajoutProduit.emit(this.produit);
  }

}
