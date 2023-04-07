import { Component, OnInit } from '@angular/core';
import { ProductAcces } from '../const/constEnums';
import { Obj } from './interface/interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productAcces = ProductAcces; 

  productIndex !: any;
  productArray: Obj[]= [{
     pname : 'samsung',
     pdetail : "A1",
     productStatus : ProductAcces.productStatus,
      id: this.uuid()
  },
  {
    pname : 'Iphone',
    pdetail : "A3",
    productStatus : ProductAcces.productStatus,
     id: this.uuid()
 },{
  pname : 'apple',
  pdetail : "A2",
  productStatus : ProductAcces.productStatus,
   id: this.uuid()
},

]
  constructor() { }

  ngOnInit(): void {
  }
  onAddValue(product: HTMLInputElement ,productdetial: HTMLInputElement){
    let obj :Obj = {
      pname : product.value,
      pdetail: productdetial.value,
      productStatus : ProductAcces.productStatus,
      id: this.uuid()
    }   
    console.log(obj);
    this.productArray.push(obj)
       
  }
  change(id:string, productValue:string){
    console.log(id);
      this.productArray.forEach((ele:Obj)=>{
         if(ele.id === id){
          ele.productStatus = productValue;
          
        }
      })
  }
  remove(id:string){
     this.productArray = this.productArray.filter((ele:Obj)=>{
        return ele.id !== id;
     })
  }
  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
