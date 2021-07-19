import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModules } from '../prime-modules.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeModules
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
