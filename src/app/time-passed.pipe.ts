import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): any {
    let now:any = new Date();
    var timeDifference = Math.abs(now - value);

    var timeDifferenceSeconds = timeDifference * 0.001;
   
    const secondsInHour:any = 3600; //seconds in an hour
    const secondsInMinute: any = 60; //seconds in a minute

    var hoursPassed: any = (timeDifferenceSeconds / secondsInHour).toFixed();
    var minutePassed: any = (timeDifferenceSeconds / secondsInMinute).toFixed();
    var secondPassed: any = timeDifferenceSeconds.toFixed();

    if(hoursPassed < 0) {
      hoursPassed = 0;
    }
    if(minutePassed < 0) {
      minutePassed = 0;
    }


    return `${hoursPassed}h ${minutePassed}min ${secondPassed}sec`;
  }

}
