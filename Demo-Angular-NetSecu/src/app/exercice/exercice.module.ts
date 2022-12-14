import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { MenuComponent } from './menu/menu.component';
import { Exercice1Component } from './exercice1/exercice1.component';


@NgModule({
  declarations: [
    MenuComponent,
    Exercice1Component
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule
  ]
})
export class ExerciceModule { }
