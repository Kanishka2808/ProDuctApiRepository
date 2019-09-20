import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productidtoedit:any;
  producttoedit;
  constructor(private route :ActivatedRoute,private productservice:ProductService,private router:Router)
   {this.route.params.subscribe((data)=>{
    this.productidtoedit=data.id; 
  })
  this.productservice.getproductbyid(this.productidtoedit).subscribe(data=>{
    this.producttoedit=data;
   
  })
}
Goback():void{
  this.router.navigate(['products'])
}

  ngOnInit() {
  }

}
