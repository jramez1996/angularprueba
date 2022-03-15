import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {XyzComponent} from './xyz/xyz.component';
const routes: Routes = [
  {
    path: 'hola',
    component: XyzComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
