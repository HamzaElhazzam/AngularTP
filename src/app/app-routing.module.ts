import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from 'src/components/add-product/add-product.component';
import { ListApiComponent } from 'src/components/list-api/list-api.component';
import { ListDetailsComponent } from 'src/components/list-details/list-details.component';

const routes: Routes = [
  {path:'test',component:ListApiComponent},
{path:'test/:id',component:ListDetailsComponent},
{path:'add',component:AddProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
