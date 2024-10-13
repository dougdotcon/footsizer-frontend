import { Component } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  capturePhoto(): void {
    console.log("Abrir câmera para tirar uma foto...");
  }

  uploadPhoto(): void {
    console.log("Abrir biblioteca para upload de imagem...");
  }

}
