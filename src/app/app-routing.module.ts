import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {FormularioComponent} from '../app/formulario/formulario.component';
import {MetropolitanaComponent} from '../app/metropolitana/metropolitana.component';
import{BioBioComponent} from '../app/bio-bio/bio-bio.component';
import {AraucaniaComponent} from '../app/araucania/araucania.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'formulario',component:FormularioComponent},
  {path: 'metropolitana',component:MetropolitanaComponent},
  {path: 'bio_bio',component:BioBioComponent},
  {path: 'araucania',component:AraucaniaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }