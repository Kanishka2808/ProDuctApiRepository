import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Product } from '../entities/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditProductComponent implements OnInit {
  title="Edit Product Form";
  productidtoedit:any;
  editProductForm:FormGroup;
  producttoedit;
  constructor(private route :ActivatedRoute,private productservice:ProductService,  private fb:FormBuilder, private router:Router)
   {  
    this.route.params.subscribe((data)=>{
      this.productidtoedit=data.id;
    })
    this.editProductForm=new FormGroup({
      ProductID:new FormControl(),
      Title:new FormControl(null),
      Price: new FormControl(null),
      Color:new FormControl(null),
      Quantity:new FormControl(null),
      inStock:new FormControl(null),
      Details:new FormControl(null),
      Rating:new FormControl(null),
      ExpiryDate:new FormControl(null),
      ImageUrl:new FormControl(null)
    })
   }

  ngOnInit() {
    this.productbyid();
    

   // this.producttoedit=this.apappserviceice.getProductById(this.productidtoedit);
    //console.log(this.producttoedit);
    // this.editProductForm=new FormGroup({
    //   ProductID:new FormControl(this.producttoedit.ProductID),
    //   Title:new FormControl(this.producttoedit.Title),
    //   Price: new FormControl(this.producttoedit.Price),
    //   Color:new FormControl(this.producttoedit.Color),
    //   Quantity:new FormControl(this.producttoedit.Quantity),
    //   Details:new FormControl(this.producttoedit.Details),
    //   ExpiryDate:new FormControl(this.producttoedit.ExpiryDate),
    //   ImageURL:new FormControl(this.producttoedit.ImageURL),
    //   InStock:new FormControl(this.producttoedit.InStock),
    //   Rating:new FormControl(this.producttoedit.Rating)
    // })
  }
  // updateProduct(id){
  //   console.log(this.producttoedit);
  //   this.apappserviceice.getProductById(this.productidtoedit).subscribe(
  //     data => {
  //       this.producttoedit=data;
  //     }
      
  //   )
  //   console.log(this.producttoedit);
  // }
prod;
  updateProduct()
  {
    console.log(this.editProductForm.value)
    this.route.params.subscribe((data)=>{
      this.productservice.editProduct(data.id,this.editProductForm.value).subscribe(data=>{
        this.prod=data;
        console.log(this.prod);
      });
      this.router.navigate(['products']);
    })
    this.router.navigate(['products'])

  }
  productbyid(){
    this.productservice.getproductbyid(this.productidtoedit).subscribe(data=>{
      this.producttoedit=data;
      this.editProd(this.producttoedit);
    })
  }
  editProd(element){
    this.editProductForm=this.fb.group({
      ProductID:[element.ProductID],
      Title:[element.Title],
      Price: [element.Price],
      Color:[element.Color],
      Quantity:[element.Quantity],
      inStock:[element.inStock],
      Details:[element.Details],
      Rating:[element.Rating],
      ExpiryDate:[element.ExpiryDate],
      ImageUrl:[element.ImageUrl]
    })
  }
  setDefault(){
    this.editProductForm.setValue({
      ProductID:this.producttoedit.ProductID,
      Title:this.producttoedit.Title,
      Price:this.producttoedit.Price,
      Color:this.producttoedit.Color,
      Quantity:this.producttoedit.Quantity,
      Details:this.producttoedit.Details,
      ExpiryDate:this.producttoedit.ExpiryDate,
      ImageUrl:this.producttoedit.ImageUrl,
      inStock:this.producttoedit.inStock,
      Rating:this.producttoedit.Rating
        })

  }
  Goback():void{
    this.router.navigate(['home'])
  }

  
}
