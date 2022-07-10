import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { ProductComponent } from '../pages/product/product.component';
import { clientRouting } from './client.routing';
import { CartComponent } from '../pages/cart/cart.component';
import { OrderComponent } from '../pages/order/order.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../pages/login/login.component';
import { DangkyComponent } from '../pages/dangky/dangky.component';
import { FilterPipe } from 'src/app/shared/filter.pipe';



@NgModule({
  declarations: [
    LayoutComponent,
    ProductComponent,
    CartComponent,
    OrderComponent,
    LoginComponent,
    DangkyComponent,
    FilterPipe,
  
  ],
  imports: [
    CommonModule,
    clientRouting,
    FormsModule
    
  ]
})
export class RoutingModule { }
