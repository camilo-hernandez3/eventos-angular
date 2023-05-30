import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent  {

  @Input()
  public placeholder: string = '';


  @Output() 
  public onValue = new EventEmitter<string>();

  constructor() { }


  emitValue( term: string ){
    
    this.onValue.emit(term);  

  }

}
