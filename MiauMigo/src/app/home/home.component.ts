import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { produto } from '../models/produto';
import { StorageService } from '../services/localStorage';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router, private service: StorageService) { }

  category: string = '';

  categorias = [
    { nome: "Acessórios", categoria: "acessorio", quant: 84, Image: "/Home/img_acessorios.jpeg" },
    { nome: "Rações", categoria: "racoes", quant: 64, Image: "/Home/img_racoes.jpeg" },
    { nome: "Camas e Tocas", categoria: "camas", quant: 22, Image: "/Home/img_camas.jpeg" },
    { nome: "Higiene e Cuidados", categoria: "higiene", quant: 16, Image: "/Home/img_higiene.jpeg" },
  ]

  linha_premium: produto[] = [
    { id: 1, nome: "Ração Premium para Cães", preco: "R$ 49,99", categoria: "racoes", Image: "/Home/food+_1.jpeg", descricao: "Alimento completo com ingredientes selecionados para o bem-estar diário dos cães.", nota: 5, vendedor: "PetAmor" },
    { id: 2, nome: "Combo Ração Premium para Cães", preco: "R$ 84,99", categoria: "racoes", Image: "/Home/food+_2.jpeg", descricao: "Pacote econômico com duas unidades de ração premium, ideal para cães de médio e grande porte.", nota: 5, vendedor: "PetVibe" },
    { id: 3, nome: "Ração Premium para Gatos", preco: "R$ 39,99", categoria: "racoes", Image: "/Home/food+_3.jpeg", descricao: "Ração premium com alto valor nutricional, indicada para gatos exigentes e saudáveis.", nota: 5, vendedor: "GatoMimos" }
  ];
  


  top_vendas: produto[] = [
    { id: 4, nome: "Peixinho Fofo", preco: "R$ 9,99", categoria: "acessorio", Image: "/Home/brinquedo_cat_1.jpeg", descricao: "Brinquedo macio em formato de peixe, ideal para diversão dos gatos.", nota: 3, vendedor: "GatoMimos" },
    { id: 5, nome: "Pote para gatos", preco: "R$ 15,99", categoria: "acessorio", Image: "/Home/img_pote_Cat.jpeg", descricao: "Pote resistente e ergonômico para alimentação de gatos.", nota: 4, vendedor: "PetAmor" },
    { id: 6, nome: "Caça Ativa", preco: "R$ 9,99", categoria: "acessorio", Image: "/Home/brinquedo_cat_2.jpeg", descricao: "Brinquedo interativo que estimula o instinto de caça dos felinos.", nota: 5, vendedor: "GatoMimos" },
    { id: 7, nome: "Hidrante Divertido", preco: "R$ 9,99", categoria: "acessorio", Image: "/Home/brinquedo_dog_2.jpeg", descricao: "Brinquedo em formato de hidrante que garante diversão para cães.", nota: 4, vendedor: "PetVibe" },
    { id: 8, nome: "Osso Divertido", preco: "R$ 10,99", categoria: "acessorio", Image: "/Home/briquendo_dog_1.jpeg", descricao: "Brinquedo em formato de osso, resistente e atrativo para cães.", nota: 4, vendedor: "PetVibe" },
    { id: 9, nome: "Caminha para gatos", preco: "R$ 59,99", categoria: "camas", Image: "/Home/caminha_Cat.jpeg", descricao: "Caminha macia e confortável feita especialmente para gatos.", nota: 4, vendedor: "GatoMimos" },
    { id: 10, nome: "Pote para cachorros", preco: "R$ 19,99", categoria: "acessorio", Image: "/Home/img_pote_dog.jpeg", descricao: "Pote durável e antiderrapante para cães de todos os portes.", nota: 5, vendedor: "PetAmor" },
    { id: 11, nome: "Caminha para cachorros", preco: "R$ 79,99", categoria: "camas", Image: "/Home/cama_dog.jpg", descricao: "Cama espaçosa e acolchoada para o descanso dos cachorros.", nota: 4, vendedor: "PetVibe" }
  ];
  


  comprar() {
    this.router.navigate(['/shop']);
  }

  anunciar() {
    this.router.navigate(['/anunciar']);
  }

  shop(categoria: string) {
    this.category = categoria
    this.router.navigate(['/shop'], { queryParams: { category: this.category } });

    this.category = '';

  }

  buy(produto: produto) {
    this.router.navigate(['product-detail', produto.id]);
    let dados = {
      nome: produto.nome,
      preco: produto.preco,
      descricao: produto.descricao,
      Image: produto.Image,
      nota: produto.nota,
      vendedor: produto.vendedor,
    }
    this.service.setLocal('produtoInfo', dados);
  }
}
