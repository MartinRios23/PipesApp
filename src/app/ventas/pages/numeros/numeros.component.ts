import { Component} from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent{
  ventasNetas:number = 3828193001.5567;
  ventasBrutas:number = 595094901903.3399;
  porcentaje:number = 0.4853
}
