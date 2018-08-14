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
        item.description = "Fomos a primeira Empresa Júnior no município de Juiz de Fora a conquistar a meta de alto crescimento da Federação de Empresas Juniores do Estado de Minas Gerais.";
        item.year = 2017;
        let item2 : Awards = new Awards();
        item2.description = "Fomos condecorados por estarmos entre as 10 melhores empresas juniores do cluster 2, segundo a Federação de Empresas Juniores do Estado de Minas Gerais";
        item2.year = 2017;
        let item3 : Awards = new Awards();
        item3.description =  "Alcançamos a marca de 100 projetos realizados, dando soluções de qualidade aos problemas dos nossos clientes, alcançando o nível de 100% de satisfação dos clientes.";
        item3.year = 2018;
        this.items.push(item);
        this.items.push(item2);
        this.items.push(item3);
    }
}