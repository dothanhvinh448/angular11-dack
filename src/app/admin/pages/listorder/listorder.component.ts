import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { CartproductService } from 'src/app/service/cartproduct.service';

@Component({
  selector: 'app-listorder',
  templateUrl: './listorder.component.html',
  styleUrls: ['./listorder.component.scss']
})
export class ListorderComponent implements OnInit {
listitem:Order[]|any=[]


  constructor(private order:CartproductService) { }

  ngOnInit(): void {
    this.getlistItem()
    console.log(this.listitem)
    console.log(this.getlistItem())
  }
  getlistItem()
  {
    this.listitem=this.order.getOrder()
  }


}
