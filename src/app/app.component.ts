import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '28-06-2023';
  // this is for binding the classes
selected = false;
  select(){
this.selected = true;
  }
  getbuttoncolor(){
    if(!this.selected){
      return "btn btn-success btn-sm text-danger"
    }
    else if(this.selected){
      return "btn btn-success btn-sm text-dark"
    }
    else{
      return "btn btn-success btn-sm"
    }
  }
  // ngfor     
  arr = [1,2,3,4,5]
  arr1 = ["abhi","kaushik","roopesh","farhan"]
 select1(a:string){
console.log(a)
 }
 // ngfor for child component
 arr2:string[] = ["bmw","audi","benz","lambo"];

 // ngif 
 arr3 = ["bca","bcom","bba","bsc"]
//  select2(){
//   this.selected = true;
//  }

arr4 =[
  {name:"farhan",
  course: "bca",
  courseprice: 30000
  },{name:"arjun",
  course: "bca",
  courseprice: 30000
  },{name:"roopesh",
  course: "bsc",
  courseprice: 40000
  },{name:"kaushik",
  course: "bcom",
  courseprice: 20000
  },{name:"abhi",
  course: "bcom",
  courseprice: 20000
  },{name:"nawaz",
  course: "bba",
  courseprice: 25000
  }
]
}
