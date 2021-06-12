import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  @Input('produit') produit : Produit;
  @Output('retour') retour = new EventEmitter<string>();

  constructor() {
    this.produit = <Produit>{};
  }

  ngOnInit(): void {
  }

  retourner() : void {
    this.retour.emit("");
  }

}
