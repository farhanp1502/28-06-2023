import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newdisplay',
  templateUrl: './newdisplay.component.html',
  styleUrls: ['./newdisplay.component.css']
})
export class NewdisplayComponent {
  @Input() a:any;
  selected = false;
  arr3 = ["bca","bcom","bba","bsc"]
  select2(){
   this.selected = true;
  }
}
