import { Testimonials } from './../../models/testimonials.model';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "testimonials",
    templateUrl: "testimonials.component.html",
    styleUrls: ['testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
    public depoimentos : Testimonials[] = new Array<Testimonials>();
    ngOnInit(): void {
        let depoimento : Testimonials = new Testimonials();
        depoimento.nome = "Eduardo";
        depoimento.cargo = "Desenvolvedor";
        depoimento.texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis alias libero, laborum quos ea ex accusamus qui excepturi eveniet quibusdam, ad corrupti cum, consectetur dignissimos? Magni aliquid expedita dignissimos quos.";
        depoimento.caminhoFoto = "../../../assets/testimonial-icon.jpg";

        this.depoimentos.push(depoimento);
        this.depoimentos.push(depoimento);
        this.depoimentos.push(depoimento);
    }
}