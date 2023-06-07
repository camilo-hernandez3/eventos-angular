import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {

  private debouncer:Subject<string> = new Subject<string>();
  

  @Input()
  public placeholder: string = '';


  @Output() 
  public onValue = new EventEmitter<string>();
  
  @Output()
  public onDebounce = new EventEmitter<string>();


 
  ngOnInit(): void {

    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        
        this.onDebounce.emit(value);

      });

  }


  emitValue( term: string ){
    this.onValue.emit(term);  
  }

  onKeyPress (searchTerm: string){

    this.debouncer.next(searchTerm);

  }

}
