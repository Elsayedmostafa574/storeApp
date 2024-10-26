import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistSource = new BehaviorSubject<any[]>(this.getWishlistFromStorage());
  wishlist$ = this.wishlistSource.asObservable();
  constructor() { }
  addToWishlist(item: any) {
    const currentWishlist = this.wishlistSource.value;
    if (!this.isInWishlist(item)) {
      const updatedWishlist = [...currentWishlist, item];
      this.wishlistSource.next(updatedWishlist);
      this.saveWishlistToStorage(updatedWishlist); // Save to localStorage
    }
  }

 // Remove item from wishlist
 removeFromWishlist(item: any) {
  const updatedWishlist = this.wishlistSource.value.filter(i => i.id !== item.id);
  this.wishlistSource.next(updatedWishlist);
  this.saveWishlistToStorage(updatedWishlist); // Save to localStorage
}

// Check if item is in wishlist
isInWishlist(item: any): boolean {
  return this.wishlistSource.value.some(i => i.id === item.id);
}

// Save wishlist to localStorage
private saveWishlistToStorage(wishlist: any[]) {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Retrieve wishlist from localStorage
private getWishlistFromStorage(): any[] {
  const wishlistData = localStorage.getItem('wishlist');
  return wishlistData ? JSON.parse(wishlistData) : [];
}
}
