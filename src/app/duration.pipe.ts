import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    let valueDate: Date = new Date(value);
    let valueWithNoTime: any = new Date(
      valueDate.getFullYear(),
      valueDate.getMonth(),
      valueDate.getDate()
    );
    var dateDifference = Math.abs(valueWithNoTime - todayWithNoTime);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dayCounter = dateDifferenceSeconds / secondsInDay;

    return dayCounter;
  }
}