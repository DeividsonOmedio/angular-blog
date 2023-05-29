import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';


@Component({
  selector: 'app-insert-article',
  templateUrl: './insert-article.component.html',
  styleUrls: ['./insert-article.component.css']
})
export class InsertArticleComponent {
  @Input()
  tile: string = "";
  @Input()
  image: string = "Imagem";
  @Input()
  card: string = "";
  @Input()
  text: string = ""

  id: number = 5;
  article: any;
  reviser:  boolean = true;
  constructor(private router: Router){}

  revisar() {
    this.reviser = false
  }
  Cancelar() {
    this.reviser = true
  }

  enviarArtigo() {
    let newAticle = {
    "id": String(this.id++),
    "title" : this.tile,
    "imgcard": this.image,
    "card": this.card,
    "textcard": this.text
  }
  this.article = newAticle;
  console.log(this.article)
  if(window.confirm("Confirma o envio do artigo?")){
      dataFake.push(this.article)
    alert("Enviado com sucesso")
    console.log(dataFake)
    this.router.navigate([''])
  }
}

}
