import { Injectable } from '@angular/core';
import { Product } from './entities/product';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {tap,catchError,map} from 'rxjs/operators';

//import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ProductService {
    apiurl='https://localhost:44358/api/products';
    headers=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    httpOPtions={
        headers:this.headers
    };




constructor(private http:HttpClient) { }
private handlerError(error:any)
{
console.error(error);
return throwError(error);
}
 getProduct(id:number) : Observable<Product>
 {
     const url='${this.apiurl}/${id}';
    return this.http.get<Product>(url).pipe(
        catchError(this.handlerError)
    );
 }



getProducts():Observable<Product[]>
{
return this.http.get<Product[]>
(this.apiurl).pipe(
    tap(data=> console.log(data)),
    catchError(this.handlerError)
);
}
editProduct(id: string,product: Product): Observable<null | Product>
{
    const url=`${this.apiurl}/${id}`;
    console.log(url)
    return this.http.put<Product>(url,product,this.httpOPtions).pipe(tap(data=>console.log(data)),
    catchError(this.handlerError));
}


addProduct(product:Product): Observable<Product>
{
    return this.http.post<Product>(this.apiurl , product, this.httpOPtions).pipe(
        tap(data=> console.log(data)),
        catchError(this.handlerError)
    );
}
deleteProduct(id:string): Observable<Product>
{
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<Product>(url, this.httpOPtions).pipe(
        catchError(this.handlerError)
    );
}




urlcreater(id)
  {
    return "https://localhost:44358/api/products/"+id
  }


  getproductbyid(id){
    return this.http.get<Product[]>(this.apiurl+"/"+id).pipe(
      tap(data => console.log(data)),
      catchError(this.handlerError)
      );
  }




}
//   products = [
//     {
//     "ProductID": "1",
//     "Title": "Bag",
//     "Price": 100,
//     "Color": "Red",
//     "inStock": false,
//     "Details": "it was awesome",
//     "Quantity":40,
//     "Rating":5,
//     "ExpiryDate":"06-09-2019",
//     "IamgeUrl": "",
//     },
//     {
//         "ProductID": "2",
//         "Title": "pencil",
//         "Price": 10,
//         "Color": "Red",
//         "inStock": false,
//         "Details": "it was awesome",
//         "Quantity":40,
//         "Rating":5,
//         "ExpiryDate":"06-09-2019",
//         "ImageUrl": "",
//         },
//         {
//             "ProductID": "3",
//             "Title": "pen",
//             "Price": 300,
//             "Color": "black",
//             "inStock": false,
//             "Details": "it was very awesome",
//             "Quantity":90,
//             "Rating":5,
//             "ExpiryDate":"06-09-2019",
//             "ImageUrl": "",
//             },
//             {
//                 "ProductID": "4",
//                 "Title": "phone",
//                 "Price": 30000,
//                 "Color": "black",
//                 "inStock": false,
//                 "Details": "Nice Product",
//                 "Quantity":90,
//                 "Rating":5,
//                 "ExpiryDate":"06-09-2019",
//                 "ImageUrl": "",
//                 },
//                 {
//                     "ProductID": "5",
//                     "Title": "handbag",
//                     "Price": 3000,
//                     "Color": "black",
//                     "inStock": false,
//                     "Details": "laptop tote bag",
//                     "Quantity":90,
//                     "Rating":5,
//                     "ExpiryDate":"06-09-2019",
//                     "ImageUrl": "",
//                     }
    
//   ];

 // getProductById(t:any) {
 //  return this.products.filter((a)=> { return a["id"] == t })[0]||null;
 // };
  //getProducts(){
  // return this.products;
 //}
 // updateProduct()

//{
//  console.log("heyy");
// }
  

