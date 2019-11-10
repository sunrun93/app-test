import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ssnMask' })
export class SSNPipe implements PipeTransform {
  transform(value: number): string {
    return '123456790';
  }
}