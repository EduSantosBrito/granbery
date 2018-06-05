import { ElementRef, Component, OnInit, HostBinding, Renderer2 } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
    @HostBinding('style.left') movimentBar : string;
    private valueClick = true;
    @HostBinding('style.height') height: number;

    constructor(private render : Renderer2, private element : ElementRef){}

    ngOnInit() {
        this.height = window.screen.height * 0.8;
    }

    openMenu() {
        this.valueClick = !this.valueClick;
        this.render.addClass(this.element.nativeElement.querySelector("#hamburger"), "z-index-4")
    }

}