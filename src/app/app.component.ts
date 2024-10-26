import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'storeApp';
  isLoading = false;
  constructor(private _loaderService:LoaderService ){}
  ngOnInit(): void {
    this.loader();
  }
  loader(): void {
    this._loaderService.isLoading.subscribe({
      next : (loader)=>{
        this.isLoading = loader;
      }
    })
  }
}
