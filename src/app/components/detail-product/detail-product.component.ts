import { Component, OnInit, Input } from '@angular/core';
import { KakesApiService } from '../../services/kakes-api.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  @Input() taskToShow: any;
  editProduct:any;

  constructor(private _httpService: KakesApiService) { }

  ngOnInit(): void {
    this.editProduct =[{_id:'', user:'',imagenKake:'', cantStars: 0, comentario: ''}];
  }

  onEditProducto() {
    this.editProduct = this.taskToShow;

    // this.taskToShow.cantStars = this.taskToShow.cantStars
    // this.taskToShow.comentario = this.taskToShow.comentario
   
      let observable = this._httpService.updateProducto(this.editProduct);
      observable.subscribe(data => {
      });
    }
}
