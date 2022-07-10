export class User{
    date:Date=new Date()
    userid=`${this.date.getMinutes()}${this.date.getHours()}${this.date.getDate()}${this.date.getMonth()+1}${this.date.getFullYear()}`
    username:string=""
    password:string=""
    email:string=""
}