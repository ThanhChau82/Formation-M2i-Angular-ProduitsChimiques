import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  produits : Produit[];
  produit : Produit;
  action : string;

  constructor() {
    this.produits = [];
    this.produit = <Produit>{};
    this.action = "";
  }

  ngOnInit(): void {
    this.produits = [
      new Produit(1, "n-Butyllithium solution", "109-72-8", "CH3(CH2)3Li", 64.06, "1.6M in hexanes", 3, "LSO-S305"),
      new Produit(2, "Methanol", "67-56-1", "CH3OH", 32.04, "Methanol, anhydrous, 99.8%", 5, "LSO-S101")
    ];
  }

  ajouterProduit(produit : Produit) : void {
    this.produits.push(produit);
    this.changerAction("");
  }

  changerAction(action : string) : void {
    this.action = action;
  }

  modifierProduit(produit : Produit) : void {
    this.changerAction("modifier");
    this.produit = produit;
  }

}
