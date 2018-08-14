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
        depoimento.nome = "Fausto Carvalho";
        depoimento.cargo = "Padaria Lisboa";
        depoimento.texto = "\"A minha ideia era aumentar minha venda com a mesma despesa e estrutura, com expectativa de aumentar em 10% o faturamento e, em 3 meses do término do projeto, já estou bem próximo desses 10%. O projeto, foi satisfatório, para mim. Foi um serviço bem feito, houve muita dedicação por parte de vocês. Acho que vocês fizeram bem feito o que vocês se propuseram a fazer, acho que isso foi legal.\"";
        depoimento.caminhoFoto = "../../../assets/testimonial-icon.png";

        this.depoimentos.push(depoimento);
    }
}