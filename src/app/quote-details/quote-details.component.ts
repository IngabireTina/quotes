import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  
  @Input() quote: Quote;
  @Output() isDelete = new EventEmitter<Boolean>();
  @Output() isIncreaseUpvote = new EventEmitter<any>();
  @Output() isIncreaseDownvote = new EventEmitter<any>();

  quoteDelete(toDelete:boolean) {
    this.isDelete.emit(toDelete);
  }

  increaseUpvote() {
    this.isIncreaseUpvote.emit(true);
  }

  increaseDownvote() {
    this.isIncreaseDownvote.emit(true);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
