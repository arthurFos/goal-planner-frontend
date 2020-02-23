import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategotyRoutingModule } from "./category-routing.module";
import { CategoryComponent } from './category.component';

@NgModule({
  imports: [
    CommonModule,
    CategotyRoutingModule
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
