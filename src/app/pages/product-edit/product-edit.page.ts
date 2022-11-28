import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {
  updateproductForm!: FormGroup;
  id: any;
  products: any;

  image: any;
  name: any;
  description: any;
  price: any;
  category: any;
  result: any;
  Id: any
  objects:any
  real:any
productedit: any;
back: any;
  constructor(private fb: FormBuilder, private actRoute: ActivatedRoute,) { }

  ngOnInit() {

    this.objects = localStorage.getItem("savedData");  //use the localstorage we getdata from savedData
    //The localStorage object allows you to save key/value pairs in the browser.
    this.real=JSON.parse(this.objects)  //parse() The JSON. parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
  
    console.log(this.objects)
    this.get()

    this.updateproductForm = this.fb.group({
      image: [''],
      name: [''],
      description: [''],
      price: [''],
      category: [''],

    })
    // this.actRoute.params.subscribe(params => {

    //   console.log(params)
    //   var data1 = params
    //   console.log(JSON.stringify(data1))
      
    //   var data = params['data']
    //   console.log(params['paramKey'])
    //   console.log(JSON.stringify(data))
    //   console.log(JSON.stringify(this.Id))

    // })

  }
  // get data
  get() {
    console.log(this.Id)
    fetch("http://localhost:7000/productRouter/productsbyid/" + this.Id, {
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



        var dd = this.updateproductForm.setValue({
          name: this.result.name,
          image: this.result.image,
          description: this.result.description,
          price: this.result.price,
          category: this.result.category
        });

        console.log(dd)
      },


      ).catch(err =>
        console.log(err))
  }


  //updateform(PUT API)
  updateForm(data: any) {
    console.log(data)
    //console.log(this.description, this.image, this.price, this.description, this.name)
    console.log(this.real._id)
    fetch("http://localhost:7000/productRouter/products/" + this.real._id, {
      method: 'PUT',
      headers: {
        "access-Control-Allow-Origin": "*",        
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),

          this.products =JSON.parse(result)  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions
        
        this.updateproductForm.reset();   // form reset
        window.location.reload()  // reloading window
        
      }

      ).catch(err =>
        console.log(err))
  }



}