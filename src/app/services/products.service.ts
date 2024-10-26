import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data, Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }
  getLimitedProducts(limit : number , page:number) : Observable<Products>{
    return this._http.get<Products>(`https://ecommerce.routemisr.com/api/v1/products?limit=${limit}&page=${page}`)
  }
  getAllProducts() : Observable<Products>{
    return this._http.get<Products>(`https://ecommerce.routemisr.com/api/v1/products`)
  }
  getProductById(id:string): Observable<Data>{
    return this._http.get<Data>(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
}
