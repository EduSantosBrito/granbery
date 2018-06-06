import { Component, OnInit } from '@angular/core';
import { Awards } from '../../models/awards.model';

@Component({
    selector: 'awards',
    templateUrl: 'awards.component.html',
    styleUrls: ['awards.component.css']
})

export class AwardsComponent implements OnInit {
    constructor() { }
    public items : Awards[] = new Array<Awards>();
    ngOnInit() { 
        let item : Awards = new Awards();
        item.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
        item.month = "Maio";
        item.year = 2017;
        let item2 : Awards = new Awards();
        item2.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
        item2.month = "Maio";
        item2.year = 2018;
        let item3 : Awards = new Awards();
        item3.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
        item3.month = "Maio";
        item3.year = 2018;
        this.items.push(item);
        this.items.push(item2);
        this.items.push(item3);
    }
}