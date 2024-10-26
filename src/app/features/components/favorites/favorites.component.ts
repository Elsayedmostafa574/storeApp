import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/products';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{

  wishlistItems: Data[] = [];

  constructor(private _wishlistService: WishlistService) {}

  ngOnInit() {
    this._wishlistService.wishlist$.subscribe(items => {
      this.wishlistItems = items;
    });
  }

  removeFromWishlist(item: any) {
    this._wishlistService.removeFromWishlist(item);
  }
}
