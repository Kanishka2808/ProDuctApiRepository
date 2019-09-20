import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  title="Products";
  imgwidth=50;
  imgmargin=2;
  searchText='';
  products: any [];
  //product: any[];
  idtofetch=1;
  ProductService: any;
 // ProductService: any;
  constructor(public sc:ProductService, private router: Router) { 
     }


  ngOnInit() {
    //this.products=this.sc.getProducts();
    this.getProducts();
    
  }
ngAfterViewInit()
{
  setTimeout(()=>
  this.sc.getProducts().subscribe(data=>{
    this.products=data;
    console.log(data);
  }),20)
}




  // getProduct(){
  //   this.ProductService.getProduct(this.idtofetch).subscribe(data=>{
  //     this.product=data;
  //   });
  // }
  
  getProducts()
  {
    this.sc.getProducts().subscribe(data=>{
      this.products=data;
    });
  }
  editProduct(id): void{
    this.router.navigate(['editproduct',id]);
  }
  deleteProduct(id): void{
    this.router.navigate(['deleteproduct',id]);
  }
  addProduct(): void{
    this.router.navigate(['products']);
  }
  DetailsProduct(id): void{
    this.router.navigate(['productdetails',id]);
  }

}