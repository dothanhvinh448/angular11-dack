import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { diachi } from 'src/app/model/diachi.model';
import { Order } from 'src/app/model/order.model';
import { product } from 'src/app/model/product.model';
import { CartproductService } from 'src/app/service/cartproduct.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  [x: string]: any;
// product:product[]|any=new product
listitem:Order[]|any=[]
public soluong:number=1
public total:number=0
public thongtin:diachi=new diachi

  constructor(private cardproduct:CartproductService,private apiproduct:ProductService,private router:Router ,private cartservice:CartproductService) { }

  ngOnInit(): void {
 this.apiproduct.getdettel().subscribe(a=>{
      this.listitem=a
    })
   
  } 
buynow(){
       this.calcCart();
       if(this.listitem.checkout=="")
       {
        alert("vui long dien thong tin  nhan hang")
       }else{
        this.cardproduct.bynow(this.listitem)
 
       }
    
      
   }
congitem(){
  this.soluong+=1
  this.listitem.soluong=this.soluong
  
     }
     truitem(){
      if(this.soluong>0){
        this.soluong-=1
        this.listitem.soluong=this.soluong
       }
      }   
    saveaddres(fra:NgForm){
      if(fra.invalid)
      {
        alert("Vui long hoan thanh form")
      }else{
        var copi = Object.assign({},this.thongtin);
        alert("đã lưu")
        fra.reset();
          this.listitem.checkout.push(copi) 
         
      }
    }
    calcCart(){
   var abc=this.listitem.product
      var total = 0;
      for (let item of abc) {
        total = this.listitem.soluong*item.dongia;
        this.listitem.total=total
      }
         console.log(this.listitem.total);   
    }
   
}
