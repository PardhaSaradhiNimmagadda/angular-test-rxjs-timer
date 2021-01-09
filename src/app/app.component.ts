import {Component, OnDestroy} from '@angular/core';
import {interval, Subscription, timer} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  timer = timer(1000, 500);
  subscription: Subscription;
  output = [];

  ngOnDestroy(): void {
    this.stopInterval();
  }

  startInterval(): void {
    if (this.subscription) {
      this.stopInterval();
    }
    this.subscription = this.timer.subscribe((num) => {
      this.output.push(num);
      if (num === 15) {
        this.subscription.unsubscribe();
      }
    });
  }

  stopInterval() {
    this.subscription.unsubscribe();
  }
}
