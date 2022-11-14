import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { StockService } from "src/services/stock.service";
import { UploadService } from "src/services/upload.service";
import { ResultType, StockType } from "src/utils/types";

@Component({
  selector: 'form-new-product',
  templateUrl: './form.html',
  providers: [ UploadService ]
})

export class FormNewProduct {
  files: File[] = [];
  product: StockType = {
    style: 'body',
    reference: 'tokio',
    color: 'blanco',
    size: 's',
    breastsize: '36',
    quantity: 2,
    price: '44000',
    images: [],
  };


  constructor(
    public dialog: MatDialog,
    private _stockService: StockService,
    public dialogRef: MatDialogRef<FormNewProduct>,
    private _uploadService: UploadService
  ) {}

  onFilesChange(e: Event) {
    const target = e.target as HTMLInputElement
    this.files = Array.from(target.files ?? []);
  }

  async onUpload() {
    const images: any = [];
    
    for (let im of this.files) {
      const formData = new FormData();

      formData.append('file', im);
      formData.append('upload_preset', 'angular_cloudinary');
      formData.append('cloud_name', 'dream-solutions')

      const resp = await fetch('https://api.cloudinary.com/v1_1/dream-solutions/upload/', {
        body: formData,
        method: 'POST',
      })
      
      const respBody = await resp.json();
      console.log(respBody);
      images.push(respBody.secure_url);
    }
    return images;
  }

  async saveNewProduct() {
    if(!this.product.style || !this.product.reference || !this.product.quantity || !this.product.price || !this.product.images) {
      alert('Todos los campos son requeridos');
    } else {
      const images = await this.onUpload();
      
      this.product.images = images;
      (await this._stockService.create(this.product)).subscribe((result: ResultType) => {
        this.dialogRef.close(result.data);
        alert(result.message);
        //en el frot end hacr un for para mostrar las imagenes, o un map filtrando solo las url
      });
    }
  }
}