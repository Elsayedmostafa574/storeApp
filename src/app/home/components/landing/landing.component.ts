import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-landing',
  templateUrl:'./landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  limitedProducts! :Data[];
  limit = 3;
  page = 5;
  ngOnInit(): void {
    this.getLimitedProducts();
  }
  constructor(private _productsService:ProductsService){}

  getLimitedProducts() : void{
    this._productsService.getLimitedProducts(this.limit , this.page).subscribe({
      next : (res:any)=>{
        this.limitedProducts = res.data;
      },
      error : (err)=>{
        console.log(err);
        
      },
      complete : ()=>{
        console.log("Limited Products Completed !");
        
      }
    })
  }
}
