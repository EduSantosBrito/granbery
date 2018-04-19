import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'error-box',
    templateUrl: './error-box.component.html',
    styleUrls: ['./error-box.component.css']
})

export class ErrorBoxComponent implements OnInit {
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
        let errorBox = document.getElementById("errorBox");
        errorBox.className = "show";
        let component = this;
        setTimeout(function () { 
            errorBox.className = errorBox.className.replace("show", "");
            component.close.emit();
        }, 3000);
    }
}