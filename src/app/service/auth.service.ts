import { Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../model/admin.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  listRegister:User[]=[];
  user:User=new User
  public adminLogin:Admin|any
 public currentUser:User[]|any=[];
 public strNote:User[]|any=[]
 key="Ao1"
    constructor() { 
      this.read();
    }

    saves(user:User){
  
        this.listRegister.forEach(item=>{
          if(user.email==item.username){
            alert("email này đã được sử dụng")
            console.log(item.email)
          }else{
            localStorage.setItem('listuser',JSON.stringify(this.listRegister));
            console.log(this.listRegister)
          }
        })
    
    
    }
    public login(user:User){
      return new Promise ((res,rej)=>{
        try 
        {
          this.listRegister.forEach(item => {
            if(user.email==item.email && user.password==item.password){
              localStorage.setItem("currentUser",JSON.stringify(user));
              res(user);
            }
          });
        } 
        catch (error)
        {
          rej(error);
          alert("sai tên đăng nhập hoặc mật khẩu")
        }
      })
    }
  
  read(){
  try {
    let strNote = localStorage.getItem('listuser');
    if(strNote)
    {
    return this.listRegister= JSON.parse(strNote);
    }
    } catch (error) {
    alert('Du lieu khong hop le')
    }
  }


  getuser(){//lay ra user

    try {
      let strNote = localStorage.getItem('currentUser');
      if(strNote)
      {
      return  JSON.parse(strNote);
      }
      } catch (error) {
      alert('Du lieu khong hop le')
      }
    
    }

  check(){
  try {
    let strcurrentUser = localStorage.getItem("currentUser");
    if(strcurrentUser && strcurrentUser.length >0)
    {
      this.currentUser = JSON.parse(strcurrentUser);
      return true;
    }
   
  } catch (error) {
    
  }
  return false;
      
  }

dangxuatuser()
{
  localStorage.removeItem("currentUser")
}




loginadmin(admin:Admin){
  return new Promise((resolve,reject)=>{
    try {
      if(admin.name=="admin"&& admin.password=="admin")
      {
        localStorage.setItem("adminLogin", JSON.stringify(admin));
        resolve(admin)
      }else{
        reject();
      }
    } catch (error) {
      reject(error)
    }
  })
}

checkLoginAdmin()
{
  let strUser=localStorage.getItem("adminLogin")
  if(strUser&&strUser.length>0)
  {
    this.adminLogin=JSON.parse(strUser);
    return true
  }
  return false;
}

logoutAdmin()
{
  localStorage.removeItem("adminLogin")
}
}
