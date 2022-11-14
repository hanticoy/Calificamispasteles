import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KakesApiService } from './services/kakes-api.service';
import { HttpClientModule } from '@angular/common/http';
import { NewProductComponent } from './components/new-product/new-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [KakesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
