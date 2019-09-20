import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../entities/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  productidtodelete="1";
  constructor(private ps:ProductService,private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.productidtodelete=data.id;
    });
  }
  deleteProduct(){
    this.ps.deleteProduct(this.productidtodelete).subscribe(data => {
      console.log(data);
    })
    alert("Data Deleted");
    this.router.navigate(['products']);

  }

}
