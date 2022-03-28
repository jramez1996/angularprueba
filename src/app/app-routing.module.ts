import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {XyzComponent} from './xyz/xyz.component';
const routes: Routes = [
  {
    path: 'hola',
    component: XyzComponent
  }

];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes, {useHash: false}),
    BrowserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
