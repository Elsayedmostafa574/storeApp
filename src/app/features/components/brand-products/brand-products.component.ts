import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/interfaces/products';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brand-products',
  templateUrl: './brand-products.component.html',
  styleUrls: ['./brand-products.component.css']
})
export class BrandProductsComponent implements OnInit{
  brandProducts! : Data[];
  brandId = '';
  constructor(private _brandsService:BrandsService , private _activated:ActivatedRoute){}

  ngOnInit(): void {
    this._activated.params.subscribe({
      next : (param)=>{
        this.brandId = param['id']
        this.getBrandProducts();
      }
    })
  }
  getBrandProducts():void{
    this._brandsService.getProductsByBrand(this.brandId).subscribe({
      next : (res)=>{
        this.brandProducts = res.data;
      }
    })
  }
}
