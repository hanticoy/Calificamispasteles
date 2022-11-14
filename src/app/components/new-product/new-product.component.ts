import { Component, OnInit } from '@angular/core';
import { KakesApiService } from 'src/app/services/kakes-api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newProduct:any;

  constructor(private _httpService: KakesApiService) { }

  ngOnInit(): void {
    this.newProduct = { user: "", imagenKake: "",cantStars:0,comentario:''};
  }

  onNewProduct() {
      let observable = this._httpService.addProduct(this.newProduct);
      observable.subscribe(data => {
      });
  }
}
