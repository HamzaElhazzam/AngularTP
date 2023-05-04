import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListApiService } from 'src/services/list-api.service';
import { ListApiComponent } from 'src/components/list-api/list-api.component';
import { ListDetailsComponent } from 'src/components/list-details/list-details.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from 'src/components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListApiComponent,
    ListDetailsComponent,
    AddProductComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule

  ],
  providers: [ListApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
