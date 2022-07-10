import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { diachi } from '../model/diachi.model';
import { Order } from '../model/order.model';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'

})
export class CartproductService {
  public search = new BehaviorSubject<string>("");
  public soluong:number=0
  public thongtin:diachi=new diachi
  public listitem:Order[]|any=[]
 public listRegister:User[]=[];
 public order:Order=new Order
 public iduser:any
  // order:Order[]=[]
  date:Date=new Date
  key="No1"
      bynow(order:Order)
      {
        if(this.authSevice.check()){
        order.idorder=Date.now()
        order.user=this.authSevice.getuser()
        order.id=this.getcurrentemail()
        var listorder=this.getOrder();
        listorder.push(order)
        localStorage.setItem(this.key,JSON.stringify(listorder))
        this.router.navigate(['/client/order']);
        setTimeout(this.reload,10)
        }else{
         alert('bạn phải đăng nhập')
          this.router.navigate(['/client/login'])
          setTimeout(this.reload,10)
          
        }
       
      }
      reload(){
        location.reload()
      }
      getcurrentemail(){ ///lay ra name cua nguoi dung dang dawng nhap
        var abc=this.authSevice.getuser()
         return abc.email
         }
    getOrder()
    {
            var getOrder=localStorage.getItem(this.key)
          try {
            if(getOrder){
              return JSON.parse(getOrder)
              console.log(getOrder)
            }else{
              return []
            }
          } catch (error) {
            return []
          }
    }
  constructor(private authSevice:AuthService,private router:Router) { }
}
