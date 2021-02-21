import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [];

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
    
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);

  }

  deleteQuote(isDelete, index) {
    if(isDelete){
      let toDelete = window.confirm(`ARE YOU SURE YOU WANT TO DELETE THIS QUOTE?`);
      if(toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  
  increaseDownvote(isIncreaseDownvote, index) {
    if(isIncreaseDownvote){
      this.quote[index].numberOfDownvote += 1;
    }
  }


  constructor() { }

  ngOnInit(): void {
  }
  

}
