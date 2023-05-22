import { Component, Input } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  imgCard: string = "";
  @Input()
  titleCard: string = "";
  @Input()
  textCard: string = "";
  @Input()
  id: string = "";

  ngOnInit():void {
    console.log(this.id)
    const result = dataFake.filter(article => article.id == this.id)[0]
    console.log(result)
    this.titleCard = result.title;
    this.textCard = result.textcard;
    this.imgCard = result.imgcard;
    console.log(result)
  }
}
