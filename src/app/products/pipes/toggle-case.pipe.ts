import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

//Pipe que transforma un string de min a mayus o viceversa.

export class toggleCasePipe implements PipeTransform {
    transform(value: string, toUpper: boolean = false): string {
        return toUpper ? value.toUpperCase() : value.toLowerCase();
    }
}