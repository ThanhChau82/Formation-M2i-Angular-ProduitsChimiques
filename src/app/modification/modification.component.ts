import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  @Input('produit') produit : Produit;

  constructor() {
    this.produit = <Produit>{};
  }

  ngOnInit(): void {
    console.log(this.produit);
  }

  modifier(f : NgForm) : void {

  }

}
