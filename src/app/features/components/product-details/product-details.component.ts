import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productId = '';
  singleProduct! : Data;

  constructor(private _activatedRoute:ActivatedRoute , private _productsService:ProductsService){}
  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next : (param)=>{
        this.productId = param['id'];
      }
    })
    this.getProductById();
  }

  
  getProductById(){
    this._productsService.getProductById(this.productId).subscribe({
      next : (res :any)=>{
        debugger
        this.singleProduct = res.data
      }
    })
  }
}
