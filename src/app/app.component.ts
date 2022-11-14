import { Component, Input} from '@angular/core';
import { KakesApiService } from './services/kakes-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ranking de cakes';
  listaProductos: any;
  @Input() producto: any;
  editTask:any={};

  selectedTask:any;
  

  constructor(private _httpService: KakesApiService){}

  ngOnInit(): void {
    this.showProducts();
    this.editTask = [{ title: "", description: "", completed: true }];
    this.producto = {id:'',user:'',imagenKake:'',cantStars:0, comentario:''}
  }

  showProducts(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      this.listaProductos = data;
      console.log("respuesta productos:", this.listaProductos);
    });
  }

  showTask(task:any){
    // console.log('tarea enviada:' + task.title);
    this.selectedTask = task;
  }

  onEditProduct(id:String) {
    // console.log(id +  ' : ' + this.producto.cantStars +  ' : ' + this.producto.comentario);
      let observable = this._httpService.updateProducto(this.producto);
      observable.subscribe(data => {
  
      });
  }
 
}
