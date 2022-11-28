import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.page.html',
  styleUrls: ['./addproducts.page.scss'],
})
export class AddproductsPage implements OnInit {

  image: any;
  name: any;
  description: any;
  price: any;
  category: any;
  get: any;
  Items: any;


  testForms!: FormGroup
  // form Array 
  testForm = new FormGroup({
    products: new FormArray(
      [
        new FormControl(null, Validators.required)
      ]
    )
  })
  back: any;
  Addproduct: any;

  constructor() { }

  ngOnInit() {
    this.testForms = new FormGroup({
      'image': new FormControl(''),
      'name': new FormControl(''),
      'description': new FormControl(''),
      'price': new FormControl(''),
      'category': new FormControl('')

    })
  }

  // addproduct(data:any){
  //   console.log(data)
  // let requestOptions = {
  //   method:'POST',
  //   body:data



  // }


  addproduct(data: any) {
    fetch("http://localhost:7000/productRouter/create", {
      method: 'post',
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.Items = result     
        this.testForms.reset();

      }

      ).catch(err =>
        console.log(err))
  }


}



