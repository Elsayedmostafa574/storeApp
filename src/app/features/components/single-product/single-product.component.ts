import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  @Input() products: Data[] = [];
  @Output() item = new EventEmitter<any>();
  @Input() page: any;
  constructor(private _cartService: CartService , private _wishlistService:WishlistService) {}


  addToWishlist(product:any) {
    this._wishlistService.addToWishlist(product);
  }

 // Remove product from wishlist
 removeFromWishlist(product:any) {
  this._wishlistService.removeFromWishlist(product);
}

// Check if product is in wishlist
isInWishlist(product:any): boolean {
  return this._wishlistService.isInWishlist(product);
}


}

