
import { diachi } from "./diachi.model";
import { product } from "./product.model";
import { User } from "./user.model";
export class Order{
    product:product[]=[];
    checkout:diachi[]=[];
    user:User[]=[];
    id:number=0;
    idorder:number=0;
    total:number=1;
    soluong:number=1
    
}