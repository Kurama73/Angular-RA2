import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseSwapFun'
})
export class ReverseSwapFunPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.split('').reverse().join('');
  }
}
