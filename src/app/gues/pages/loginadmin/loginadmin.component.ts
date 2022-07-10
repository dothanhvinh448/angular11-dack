import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.scss']
})
export class LoginadminComponent implements OnInit {
admin:Admin=new Admin
  constructor(private authSevice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
onsubmit(frm:NgForm){
  {
    if(frm.valid){
      alert('dang su li')
        this.authSevice.loginadmin(this.admin).then((res:any)=>{
          this.router.navigate(['/admin']);
        }).catch((error)=>{
          alert("dang nhap that bai");
        })
      }
  }
}
}
