import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
show:boolean=false
showmodeluser:boolean=false
check:any
user:User[]=[]
useremail:any
changeText:boolean;
  constructor(private authService:AuthService) { 
    this.changeText=false
  }

  ngOnInit(): void {
this.checkout()
this.getuserlogin()
this.useremail=this.getuserlogin()
  }
dangxuat()
{
  this.authService.dangxuatuser()
  alert("da dang xuat ")
  location.reload()
}

checkout(){
  this.check=this.authService.check()
  if(this.check==true){
    this.show=true
  }else{
    this.show=false
  }

 
  
}
getuserlogin()
{
let email
   this.user=this.authService.getuser()
   this.check=this.authService.check()
if(this.check==true){
  for(let item of Object.values(this.user)){
    email=item
  }
}
  return email
}

}
