import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AddproductsPageRoutingModule } from './addproducts-routing.module';

import { AddproductsPage } from './addproducts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddproductsPageRoutingModule,
    ReactiveFormsModule,
     RouterModule,

  ],
  declarations: [AddproductsPage]
})
export class AddproductsPageModule {}
