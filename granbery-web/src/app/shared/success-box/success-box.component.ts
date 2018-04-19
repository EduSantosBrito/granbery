import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'success-box',
    templateUrl: './success-box.component.html',
    styleUrls: ['./success-box.component.css']
})

export class SuccessBoxComponent implements OnInit {


    @Input() public message: string;
    @Input()
    public set show(show: boolean) {
        if(show){
            this.showSuccessBox();
        }
    }
    @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }


    public showSuccessBox() {
        let successBox = document.getElementById("successBox");
        successBox.className = "show";
        let component = this;
        setTimeout(function () { 
            successBox.className = successBox.className.replace("show", "");
            component.close.emit();
        }, 3000);
    }
}