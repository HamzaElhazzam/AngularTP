import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/producs.model';
import { ListApiService } from 'src/services/list-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product : Products = {
    id:'',
    title:'',
    price:'',
    category:'',
    description: '',
    image:''
  };
  constructor(private listS: ListApiService, private router: Router){}
  addProduct(){
    this.listS.addProduct(this.product).subscribe({
      next:(x)=>{
        this.router.navigate(['test']);
        
      }
    });
  }
}
