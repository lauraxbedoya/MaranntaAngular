import { Component, OnInit } from "@angular/core";
import { StockService } from "src/services/stock.service";
import { StockType } from "src/utils/types";
import { MatDialog } from '@angular/material/dialog';
import { FormNewProduct } from "./newProduct/form";


@Component({
  selector: 'stock',
  templateUrl: './stock.html',
  styleUrls: ['./stock.css']
})

export class Stock implements OnInit {
  values: Array<StockType> = [];
  originalValues: Array<StockType> = [];
  searchText: string = '';
  totalProducts: number = 0;

  constructor(
    private _stockService: StockService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    (await this._stockService.getStock()).subscribe((data) => {
      this.values = data;
      this.originalValues = JSON.parse(JSON.stringify(data));
      this.totalStock();
    })
  }

  totalStock() {
    this.totalProducts = this.values.reduce((acc, stock) => acc + stock.quantity, 0); 
  }

  async updateQuantityForm() {
    let productsUpdated: any = [];

    for(let i = 0; i <= this.values.length; i++) {
      if(this.values[i].quantity !== this.originalValues[i].quantity) {
        productsUpdated.push({id: this.values[i].id, quantity: this.values[i].quantity});
        this.values[i].id = productsUpdated[i].id;
        this.values[i].quantity = productsUpdated[i].quantity;
      }
    }
    (await this._stockService.updateQuantity()).subscribe((productsUpdated) => {
      this.values = productsUpdated
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormNewProduct, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.values.push(result);
      this.totalStock();
    });
  }


  handleSum(id: any) {
    this.values.map(cant => {
      if(cant.id === id) {
        cant.quantity += 1
      }
      return cant;
    })
    this.totalStock();
  }

  async handleSubtraction(id: any) {
    let isCero = false;

    this.values.map(cant => {
      if(cant.id === id) {
        cant.quantity -= 1;
      }

      if(cant.quantity < 0) {
        isCero = true;
      } 
      return cant
    });

    if(isCero) {
      (await this._stockService.deleteProduct(id)).subscribe((data) => {
        this.values = this.values.filter(product => product.id !== id);
        this.originalValues = JSON.parse(JSON.stringify(this.values));
        alert('se elimino corectatmente');
      })
    }
    this.totalStock();
  }
}