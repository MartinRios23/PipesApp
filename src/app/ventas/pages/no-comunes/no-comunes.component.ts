import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //Select
  nombre:string = 'Martin';
  genero:string = 'masculino'
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //Plural
  clientes:string[] = ['Maria','Pedro','Francisco','Martin']
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    this.nombre = 'Ariana'
    this.genero = 'femenino'
  }

  quitarInvitados(){
    this.clientes.shift();
  }

  //KeyValuePipe
  persona = {
    nombre: 'Martin',
    edad: 24,
    direccion: 'Mendoza, Argentina'
  }

  //JSON pipe
  heroes = [
    {
      nombre:'Superman',
      vuela: true
    },
    {
      nombre:'Batman',
      vuela: false
    },
    {
      nombre:'Cyborg',
      vuela: true
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Promesa resuelta')
    }, 3500);
  });
}
