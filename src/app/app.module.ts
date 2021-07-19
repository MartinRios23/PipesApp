import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//Modules
import { AppRouterModule } from './app-router.module';
import { PrimeModules } from './prime-modules.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de la app
import localES from '@angular/common/locales/es-AR';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localES);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    PrimeModules,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
