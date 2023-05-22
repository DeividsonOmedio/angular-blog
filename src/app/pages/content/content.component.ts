import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()
  titleCard: string = "";
  @Input()
  imgCard: string = "";
  @Input()
  textCard: string = "";
  private id: string | null = "0"

  constructor(private route: ActivatedRoute){}
  ngOnInit():void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setVauesToComponent(this.id)
  }

  setVauesToComponent(id: string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.titleCard = result.title;
    this.textCard = result.textcard;
    this.imgCard = result.imgcard;
    console.log(result)

  }



}
