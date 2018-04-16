import { Output, Component, OnInit, ElementRef, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hamburger-icon',
  templateUrl: './hamburger-icon.component.html',
  styleUrls: ['./hamburger-icon.component.css']
})
export class HamburgerIconComponent implements OnInit {
  @Output() notify : EventEmitter<Boolean> = new EventEmitter<Boolean>();

  private clickValue = false;


  constructor() { }

  ngOnInit() {
    this.notify.emit(this.clickValue);
  }
  public onClick() {
    this.clickValue = !this.clickValue;
    this.notify.emit(this.clickValue);
  }

}
