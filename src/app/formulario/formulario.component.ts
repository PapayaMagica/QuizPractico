import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario:FormGroup;

  constructor(public form:FormBuilder) { 
    this.formulario=this.form.group({
      region:['',Validators.required],
      clima:['',Validators.required],
      dia:['',Validators.required],
      temperatura:['',Validators.required,Validators.pattern("^[0-9]*$")],
      escala:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ValidarDatos()
  {
    console.log(this.formulario.value);
  }
}
