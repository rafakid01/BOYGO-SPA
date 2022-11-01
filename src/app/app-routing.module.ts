import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { EntregadorComponent } from './entregador/entregador.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'empresa', component: EmpresaComponent, title: "BoyGo Empresa" },
  { path: 'entregador', component: EntregadorComponent, title: "BoyGo Entregadores" },
  { path: '', redirectTo: '/', pathMatch: 'full', title: "BoyGo Empresa" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), BrowserModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
