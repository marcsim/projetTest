import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'projetTest';
  public secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log("We have an error " + error);
      },
      () => {
        console.log("Observable complete");
      } 
    )
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
