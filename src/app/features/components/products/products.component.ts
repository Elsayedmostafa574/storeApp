import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  allProducts:Data[] = [];
  p: number = 1;
  cartProducts :any[]= [];
  constructor(private _productsService:ProductsService){}
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts():void{
    this._productsService.getAllProducts().subscribe({
      next : (res)=>{
        this.allProducts = res.data;
      }
    })
  }

  // addToCart(event:any){
  //   if("cart" in localStorage){
  //     this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
  //     this.cartProducts.push(event);
  //     localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
  //   }else{
  //     this.cartProducts.push(event);
  //     localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
  //   }
    
  // }
}
