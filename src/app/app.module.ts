import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
@NgModule({
 declarations: [
 AppComponent,
 ProductComponent,
 AddproductComponent,
 ],
 imports: [
 BrowserModule,
 AppRoutingModule,
 HttpClientModule,
 FormsModule
 ],
 providers: [ProductService],
 bootstrap: [AppComponent]
})
export class AppModule { }
