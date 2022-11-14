import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KakesApiService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(environment.urlServiceQueryAll);
  }

  addProduct(newProduct:any){
    return this._http.post(environment.urlServiceNew, newProduct);
  }
  updateProducto(producto:any){
    return this._http.put(environment.urlServiceUpdate,producto);
  }

}
