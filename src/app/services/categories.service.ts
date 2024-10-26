import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponse } from '../interfaces/category-response';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient) { }
  getCategories() : Observable<CategoryResponse>{
    return this._http.get<CategoryResponse>(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
}
