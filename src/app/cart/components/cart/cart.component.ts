import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Data } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit , OnDestroy{
  cartProducts:any[] = [];
  cartSubscription!: Subscription;
  constructor(private _cartService:CartService){}
  ngOnInit(): void {
  }



  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

}
