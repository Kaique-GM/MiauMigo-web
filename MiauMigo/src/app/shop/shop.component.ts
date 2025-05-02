import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  filter: string = '';
  category: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.filter = params['search'] || '';
      this.category = params['category'] || '';
    });
  }

  categorias = [
    { nome: "Higiene e Cuidados", categoria: "higiene", img: "/Shop/sapo.png" },
    { nome: "Rações", categoria: "racoes", img: "/Shop/dog_food.png" },
    { nome: "Todas", categoria: "", img: "/Icons/cat.png" },
    { nome: "Acessórios", categoria: "acessorio", img: "/Home/furao.png" },
    { nome: "Camas e Tocas", categoria: "camas", img: "/Shop/sleep_bird.png" },
  ]

  produtos = [
    { id: 12, nome: "Garrafa Portátil de Água para Pets", preco: "R$ 29,99", categoria: "acessorio", Image: "/Shop/produtos/acc_3.jpeg" },
    { id: 13, nome: "Cama Redonda Luxo para Gatos", preco: "R$ 69,90", categoria: "camas", Image: "/Shop/produtos/cama_1.jpeg" },
    { id: 14, nome: "Ração Úmida para Gatos", preco: "R$ 7,50", categoria: "racoes", Image: "/Shop/produtos/racao_2.jpeg" },
    { id: 15, nome: "Coleira com GPS para Cães", preco: "R$ 89,90", categoria: "acessorio", Image: "/Shop/produtos/acc_1.jpeg" },
    { id: 16, nome: "Cama Portátil para Viagens", preco: "R$ 59,90", categoria: "camas", Image: "/Shop/produtos/cama_4.jpeg" },
    { id: 17, nome: "Brinquedo Inteligente para Gatos", preco: "R$ 25,00", categoria: "acessorio", Image: "/Shop/produtos/acc_2.jpeg" },
    { id: 18, nome: "Ração Natural para Cães Adultos", preco: "R$ 52,99", categoria: "racoes", Image: "/Shop/produtos/racao_1.jpeg" },
    { id: 19, nome: "Cama com Cobertura para Cães", preco: "R$ 89,99", categoria: "camas", Image: "/Shop/produtos/cama_2.jpeg" },
    { id: 20, nome: "Coleira Estampada para Gatos", preco: "R$ 14,99", categoria: "acessorio", Image: "/Shop/produtos/acc_4.jpeg" },
    { id: 21, nome: "Caminha Térmica para Inverno", preco: "R$ 99,99", categoria: "camas", Image: "/Shop/produtos/cama_3.jpeg" },
    { id: 22, nome: "Ração Light para Gatos Castrados", preco: "R$ 45,90", categoria: "racoes", Image: "/Shop/produtos/racao_4.jpeg" },
    { id: 23, nome: "Snack Saudável para Cães", preco: "R$ 12,99", categoria: "racoes", Image: "/Shop/produtos/racao_3.jpeg" }
  ];
  

  selectedCategory(categoriaSelecionada: string) {
    this.filter = '';
    this.category = categoriaSelecionada;
  }

  get filteredCategory() {
    if (!this.category.trim()) {
      return this.produtos;
    }
    else {
      return this.produtos.filter(p => p.categoria.includes(this.category));
    }
  }

  get filtered() {
    if (this.filter.trim()) {
      this.category = '';
      return this.produtos.filter(p => p.nome.toLowerCase().includes(this.filter.toLowerCase()));

    } else if (this.category) {
      return this.produtos.filter(p => p.categoria === this.category);
    } else {
      return this.produtos;
    }
  }
}
