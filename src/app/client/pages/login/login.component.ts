import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user:User=new User
  constructor(private athuService:AuthService,private router:Router) { }

  ngOnInit(): void {
   
  }
  onsubmit(x:NgForm){
    if(x.valid){
      this.athuService.login(this.user).then((res:any)=>{
      this.router.navigate(['/client/product'])
      setTimeout(this.reload,1)

      }).catch(()=>{
        alert("that bai")
        
      })
    }else{
      // alert('loi')
    }
  }

   reload(){
    location.reload()
  }
  
}
