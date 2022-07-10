import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.scss']
})
export class DangkyComponent implements OnInit {
listuser:User[]|any=[]
listadc:User[]=[];
user:User=new User
keyuser="user"
  constructor(private AuthService:AuthService) { }

  ngOnInit(): void {
  }

  onsubmit(x:NgForm){
    if(x.valid){
      let tmp=Object.assign({},this.user);
      this.AuthService.listRegister.push(tmp);
      //  this.save();
      this.AuthService.saves(this.user);
      x.reset();
    }
    else{
      alert("vui long hoan thanh");
    }
  }




  // save(){
  //   localStorage.setItem('listadmintest',JSON.stringify(this.listadc)); 
  // }
  // read(){
  //   try {
  //     let strNote = localStorage.getItem('listadmintest');
  //     if(strNote)
  //     {
  //       this.listadc= JSON.parse(strNote);
  //     }
  //   } catch (error) {
  //    alert('Du lieu khong hop le');
  //   }
  // }
}
