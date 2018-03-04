import { Component, OnInit } from '@angular/core';
import { QuoteDataService } from '../quote-data.service';
import { Quote } from '../quote';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('quoteIn', [
      transition('void => *', [style({transform: 'translateX(-100%)'}), animate('300ms ease-in')]),
    ]),
    trigger('quoteOut', [
      transition('* => void', [style({transform: 'translateX(0)'}), animate('200ms ease-out', style({transform: 'translateX(-100%)'}))]),
    ])
  ]
})

export class MainComponent implements OnInit {

  state = true;
  quotes: Quote[];
  selectedQuote = new Quote('', '');

  constructor(public quoteService: QuoteDataService) { }

  toggleState(): void {
    this.state = !this.state;
  }

  ngOnInit() {
    this.getQuotes();
  }

  getQuotes(): void {
    this.quoteService.getData().subscribe(
      (data) => {
        this.quotes = data;
        this.randomQuote();
      }
    );
  }

  randomQuote(): void {
    this.selectedQuote = this.shuffleArray(this.quotes)[0];
  }

  shuffleArray(arr) {
    const shuffled = arr;
    for (let i = 0; i < arr.length - 1; i++) {
      let j = Math.floor(Math.random() * (arr.length - i)) + i;
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  changeQuote() {
    this.randomQuote();
    setInterval(this.toggleState(), 1000);
  }

}
