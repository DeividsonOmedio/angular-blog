import { Component } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bigid: string | null = ""
  idsmall1: string | null = ""
  idsmall2: string | null = ""
  idsmall3: string | null = ""

ngOnInit():void {
  let max: any = String(dataFake.length -1)
  this.bigid = String(dataFake.length)
  console.log("big", this.bigid)
  console.log("max",max)
  do{
  this.idsmall1= String(Math.floor(Math.random() * (max - 1 + 1) + 1));
  this.idsmall2 = String(Math.floor(Math.random() * (max - 1 + 1) + 1));
  this.idsmall3 = String(Math.floor(Math.random() * (max - 1 + 1) + 1));
  } while(this.idsmall1 === this.idsmall2 || this.idsmall1 === this.idsmall3 || this.idsmall2 === this.idsmall3 )



  console.log(this.idsmall1)
  console.log(this.idsmall2)
  console.log(this.idsmall3)

  }

    getRandomInt(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
