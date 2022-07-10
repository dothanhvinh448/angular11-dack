import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { AuthService } from 'src/app/service/auth.service';
import { CartproductService } from 'src/app/service/cartproduct.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
listOrder:Order|any= []
fitercategory:Order|any=[]
iduser:string|any

  constructor(private cartservice:CartproductService ,private authSecvice:AuthService) { }

  ngOnInit(): void {
    this.getlistOrder()
    this.getid()
    this.filter()
    console.log(this.iduser)
    // setTimeout(this.reload,500)

    
  }
  getlistOrder()
  {
    this.listOrder=this.cartservice.getOrder()
    console.log(this.listOrder)

  }
  reload(){
    location.reload()
  }
  filter(){
    this.fitercategory=this.listOrder
    .filter((a:any)=>{
      if(a.id==this.iduser){
        console.log(a.id)
        return a
      }
    })
  }

  getid(){//get id usesr
  this.iduser=this.cartservice.getcurrentemail()
  }
}
