import { Component } from '@angular/core';
import { fromReadableStreamLike } from 'rxjs/internal/observable/innerFrom';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero | undefined | '' = '';

  public heroes:Hero[] = [
    {
      name:'Superman',
      canFly:true,
      color: Color.blue
    },
    {
      name:'Batman',
      canFly:false,
      color: Color.black
    },
    {
      name:'Robin',
      canFly:false,
      color: Color.green
    },
    {
      name:'Daredevil',
      canFly:false,
      color: Color.red
    },
    {
      name:'Linterna Verde',
      canFly:true,
      color: Color.yellow
    }
  ]


  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero ){
    this.orderBy = value;
  }

}
