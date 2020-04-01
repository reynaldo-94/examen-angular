import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public personas : any;

  constructor() { }

  ngOnInit(): void {
    this.personas = JSON.parse(localStorage.getItem("personas"));
  }

  delete(id){
    //let persona = JSON.parse(localStorage.getItem("personas"));
    let cont = 0;
    this.personas.forEach(datos => {
      if(id == datos.id) {
        this.personas.splice(cont,1);
      }
      cont++;
    });
    localStorage.setItem("personas",JSON.stringify(this.personas));
  }

}
