import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
 selector: 'app-product',
 templateUrl: './product.component.html',
 styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products:any;
 message:any;
 isEdit:boolean=false
 prodObj=
 {
 "name": " ",
 "desc": " ",
 "price": " "
 }
 constructor(private service:ProductService) { }
 createProduct(data:any)
{
 this.service.createProduct(data).subscribe((response)=>
 {
 console.log(response)
 this.message ="Products Added Successfully"
 })
 }
 getProducts()
 {
 this.service.getProduct().subscribe(data =>
 {
 this.products =data;
 })
 }
 deleteProduct(data:any)
 {
 console.log(data)
 this.service.deleteProd(data).subscribe((response)=>
 {
 console.log(response)
 
 }) 
 }
 productedit(data:any)
 {
 this.isEdit=true
 this.prodObj=data
 }
 updateProduct()
 {
 this.service.updateProd(this.prodObj).subscribe((response)=>
 {
 })
 }
ngOnInit(): void {
 this.getProducts()
 }
}