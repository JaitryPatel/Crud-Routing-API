import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shoten'
})
export class ShotenPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
