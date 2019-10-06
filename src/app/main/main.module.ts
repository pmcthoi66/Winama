import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FunctionComponent } from './function/function.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, FunctionComponent, RoleComponent, UserComponent, ProductComponent, ProductCategoryComponent]
})
export class MainModule { }
