import { Component } from '@angular/core';
import {ListApiService} from 'src/services/list-api.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent {
  constructor(private product: ListApiService){

  }
  myData: any;
  ngOnInit():void{
    this.product.getData().subscribe((data)=>{
      this.myData=data;
    });
  }
}
