import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {
viewadm: boolean = true;
@Input()
user: string = "";
@Input()
pass: string = "";

  ngOnInit(){

  }
  logar() {


    if(this.user === "" || this.pass === ""){
      alert("Os campos usuário e senha devem ser preenchidos")
    }
    else{
      if(this.user === "admin" && this.pass === "adm"){
        this.viewadm = false
      }
      else{
        alert("Usuário ou senha inválidos")
      }
    }
}

}
