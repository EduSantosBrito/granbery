import { ElementRef } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Awards } from '../../models/awards.model';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls:['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

    @Input() public items : Awards[] = new Array<Awards>();
    private slideIndex = 1;
    constructor() { }
    ngOnInit() {
        
    }

    public plusSlides(number : number) {
        this.showSlides(this.slideIndex += number);
    }

    public showSlides(number : number){
        let elements = document.getElementsByClassName("carousel")
        if(number > this.items.length) {
            this.slideIndex = 1;
        }
        if(number < 1){
            this.slideIndex = this.items.length;
        }
        for(let i = 0; i < this.items.length; i++){
            elements[i].classList.remove('display-block');
            elements[i].classList.add('display-none');
        }
        elements[this.slideIndex-1].classList.remove('display-none');
        elements[this.slideIndex-1].classList.add('display-block');

    }
}