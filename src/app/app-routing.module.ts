import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { SinopseComponent } from './sinopse/sinopse.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },

  { path: 'lista', component: ListaComponent },
  { path: 'sinopse', component: SinopseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
