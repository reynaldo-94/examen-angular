import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public campo: string;

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    console.log('buscar',this.campo);
    let personas = JSON.parse(localStorage.getItem("personas"));
  }

}

