import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/model/product.model';
import { AuthService } from 'src/app/service/auth.service';
import { CartproductService } from 'src/app/service/cartproduct.service';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
path:String="../../../../assets/logo-text.png"
quancao1:String="../../../../assets/banner-quang-cao-dien-thoai_103211774.webp"
iphone:product=new product
listiphone:product[]|any=[]
fitercategory:product[]|any=[]
searchKey:string ="";
public searchTerm !: string;
  constructor(private apiProduct:ProductService,private cartService:CartproductService,private router:Router,private authService:AuthService ) {
    
   }

  ngOnInit(): void {
    this.getdata()
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  getdata()
  {
   this.apiProduct.getALlproduct().then(a=>{
    this.listiphone=a
    this.fitercategory=a
   }).catch()
    
  }
  //su kien mua hang
  buy(list:product){
    this.apiProduct.buynow(list)
  }
  filter(category:string){
    this.fitercategory=this.listiphone
    .filter((a:any)=>{
      if(a.category == category || category==''){

        return a
      }
        
      
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

checkout(){
 if(this.authService.check())
 {
  this.router.navigate(['/client/order'])
 }else{
  alert("bạn phải đăng nhập")
 }
}
}
