import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditProductComponent } from './editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './productfilter.pipe';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const productroutes: Routes = [
  {path:'products',component:ListproductComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'editproduct/:id',component:EditProductComponent},
  {path:'deleteproduct/:id',component:DeleteproductComponent},
  {path:'productdetails/:id',component:ProductdetailsComponent}


  ];

@NgModule({
  declarations: [AddproductComponent, 
    DeleteproductComponent, 
    EditProductComponent,
    ProductFilterPipe,
    ProductdetailsComponent,
    ListproductComponent 
    ],
    
  providers: [ProductService],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(productroutes)
  ]
})
export class ProductsModule { }
