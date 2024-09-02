import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {

  public nameLower: string = 'gonzalo';
  public nameUpper: string = 'GONZALO';
  public fullName: string = 'GonZAlO paCHEcO';

  public customDate: Date = new Date();

}
