import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower:string = 'martin';
  nombreUpper:string = 'MARTIN';
  nombreCompleto:string = 'mArTin rIoS';

  fecha:Date = new Date(); //al dia de hoy
}
