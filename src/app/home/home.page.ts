import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: any = [];


  name:any;
  description: any;
  price: any;
  category: any;
  image: any;




  constructor(private router:Router) { }

   ngOnInit(): void {
    this.get()
   }

route(){
  this.router.navigate(['/product-edit'])
}


  get() {
    fetch("http://localhost:7000/productRouter/products", {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },


    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.products = result.all
         console.log(this.products)
      }

      ).catch(err =>
        console.log(err))
  }
   

  deleteproduct(id: any) {
    fetch("http://localhost:7000/productRouter/products/" + id, {
      method: 'DELETE',
      headers: {
        "access-Control-Allow-Origin": "*",

      },

    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.get()
      }

      ).catch(err =>
        console.log(err))
  }
  sendData(data:any){
    console.log(data)
    localStorage.setItem("savedData", JSON.stringify(data));
    //The localStorage object allows you to save key/value pairs in the browser.
  }

}
