import { Component, Input } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  imgCard: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";
  @Input()
  textCard: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam cupiditate perspiciatis nostrum a voluptatum explicabo, soluta officiis";
  @Input()
  id: string = "";

  ngOnInit():void {
    const result = dataFake.filter(article => article.id == this.id)[0]
    this.textCard = result.textcard;
    this.imgCard = result.imgcard;
    console.log(result)
  }
}
