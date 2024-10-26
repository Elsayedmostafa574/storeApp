import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandsResponse } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _http : HttpClient) { }
  getBrands() : Observable<BrandsResponse>{
    return this._http.get<BrandsResponse>(`https://ecommerce.routemisr.com/api/v1/brands`);
  }
  getProductsByBrand(brandId :string):Observable<any>{
    return this._http.get<any>(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`);
  }
}
