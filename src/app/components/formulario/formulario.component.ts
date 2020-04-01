import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public cont: any;
  public obj = {
    table: []
  };
  public is_edit: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.user = {
      id: 1,
      nombre: '',
      apellidos: ''
    };
    this.cont = 1;
    this.is_edit = false;
  }

  ngOnInit(): void {
    var persona = JSON.parse(localStorage.getItem("personas"));
    persona.forEach(datos => {
      this.obj.table.push({
        id: datos.id,
        nombre: datos.nombre,
        apellidos: datos.apellidos
      })
    });
    this._route.params.subscribe((params: Params) => {
      if(params.id != undefined){
        this.is_edit = true;
        this.user.id = params.id;
        persona.forEach(datos => {
          if(datos.id == this.user.id){
            this.user.nombre = datos.nombre;
            this.user.apellidos = datos.apellidos;
          }
        });
      }
    });
    console.log('isboolean',this.is_edit);
  }

  onSubmit(){
    if(!this.is_edit){
      this.user.id = parseInt(localStorage.getItem("contador"))+1 || this.cont;
      this.obj.table.push({
        id: this.user.id,
        nombre: this.user.nombre,
        apellidos: this.user.apellidos
      });
      localStorage.setItem("contador",this.user.id);
    }
    if(this.is_edit){
      let persona = JSON.parse(localStorage.getItem("personas"));
      persona.forEach(datos => {
        if(datos.id == this.user.id){
          this.obj.table[datos.id-1]["nombre"] = this.user.nombre;
          this.obj.table[datos.id-1]["apellidos"] = this.user.apellidos;
        }
      });
    }
    console.log('personas',this.obj.table);
    localStorage.setItem("personas",JSON.stringify(this.obj.table));
    this._router.navigate(['/home']);
    
  }
  
}
