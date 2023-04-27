import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Products } from 'src/app/models/producs.model';
import { ListApiService } from 'src/services/list-api.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent {
  productDetails : Products = {
    id:'',
    title:'',
    price:'',
    category:'',
    description: '',
    image:''
  };
  constructor(private route: ActivatedRoute,private editservice : ListApiService, private router : Router){}
  ngOnInit():void{
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        console.log(id);
        if(id){
          this.editservice.getProduct(id).subscribe({
            next:(response)=> {
              this.productDetails = response;
            }
          })
        }
      }
    })
  }
}
