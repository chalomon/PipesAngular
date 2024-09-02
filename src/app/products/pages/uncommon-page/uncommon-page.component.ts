import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select

  public name: string = 'Gonzalo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {

    if ( this.name === 'Gonzalo' ) {
      this.name = 'Carolina';
      this.gender = 'female';
    } else {
      this.name = 'Gonzalo';
      this.gender = 'male';
    }
  }

  //i18n Plural

  public clients: string[] = ['Gonzalo', 'Carolina', 'Juan', 'Ana', 'Pedro'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValues Pipe

  public person = {
    name: 'Gonzalo',
    age: 28,
    address: 'Calle 123'
  }

  //Async Pipe

  public myObservableTimer:Observable<number> = interval(2000)
    .pipe( tap( value => console.log('tap: ', value) ) );  //2000 = 2 segundos

  public promiseValue = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
      console.log('Tenemos data de la promesa')
    }, 3500);
  });


}
