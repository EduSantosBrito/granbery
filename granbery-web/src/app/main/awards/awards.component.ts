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
        item.description = "Primeira Empresa Júnior em Juiz de Fora a atingir alto crescimento.";
        item.month = "maio";
        item.year = 2017;
        let item2 : Awards = new Awards();
        item2.description = "lal";
        item2.month = "maio";
        item2.year = 2018;
        let item3 : Awards = new Awards();
        item3.description = "lal2";
        item3.month = "maio";
        item3.year = 2018;
        this.items.push(item);
        this.items.push(item2);
        this.items.push(item3);
    }
}