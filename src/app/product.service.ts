import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
 providedIn: 'root'
})
export class ProductService {
 constructor(private http:HttpClient) { }
 getProduct()
 {
 return this.http.get("http://localhost:3000/products")
 }
 createProduct(data:any)
 {
 return this.http.post("http://localhost:3000/products",data)
 }
 deleteProd(data:any)
 {
 return this.http.delete("http://localhost:3000/products/"+data.id)
 }
 updateProd(data:any)
 {
 return this.http.put("http://localhost:3000/products/"+data.id,data)
 }
}

