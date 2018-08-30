import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name : 'transferStr'})

export class TranferStrPipe implements PipeTransform {

  newValue = '';

  transform(value: string) {
    for (let i = value.length - 1; i >= 0; i--) {
      this.newValue += value.charAt(i);
    }
    console.log('string : ' + this.newValue);
    return this.newValue;
  }
}
