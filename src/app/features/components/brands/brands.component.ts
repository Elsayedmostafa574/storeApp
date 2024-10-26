import { Component, OnInit } from '@angular/core';
import { Brand, BrandsResponse } from 'src/app/interfaces/products';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  brands : Brand[] = [];
  ngOnInit(): void {
    this.getAllBrands();
  }
  constructor(private _brandsService:BrandsService){}
  getAllBrands() : void {
    this._brandsService.getBrands().subscribe({
      next : (res: any)=>{
        debugger
        this.brands = res.data
      }
    })
  }
}
