import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/products';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  responsiveOptions: any[] | undefined;
  categories :Category[] = [];
  constructor( private _categoryService:CategoriesService){}
  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 5,
          numScroll: 5
      },
      {
          breakpoint: '1220px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '1100px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  this.getAllCategory();
  }
  getAllCategory() :void{
    this._categoryService.getCategories().subscribe({
      next : (res : any)=>{
        this.categories = res.data
        
      },
      error : (err)=>{
        console.log(err);
        
      },
      complete : ()=>{
        console.log("Categories Completed !");
        
      }
    })
  }


}
