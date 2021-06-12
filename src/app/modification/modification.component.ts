import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  @Input('produit') produit : Produit;
  @Output('modifProduit') modifProduit = new EventEmitter<Produit>();

  constructor() {
    this.produit = <Produit>{};
  }

  ngOnInit(): void {
    console.log(this.produit);
  }

  modifier(f : NgForm) : void {
    let p = new Produit(f.value.id, f.value.nom, f.value.cas, f.value.formule, f.value.masseMoleculaire, f.value.description, f.value.quantite, f.value.localisation);
    this.modifProduit.emit(p);
  }

}
