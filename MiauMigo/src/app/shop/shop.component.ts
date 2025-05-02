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
    { nome: "Acessórios", categoria: "acessorio" },
    { nome: "Rações", categoria: "racoes" },
    { nome: "Camas e Tocas", categoria: "camas" },
    { nome: "Higiene e Cuidados", categoria: "higiene" },
  ]

  produtos = [
    { id: 1, nome: "Ração Premium para Cães", preco: "R$ 49,99", categoria: "racoes", Image: "/Home/food+_1.jpeg" },
    { id: 2, nome: "Combo Ração Premium para Cães", preco: "R$ 84,99", categoria: "racoes", Image: "/Home/food+_2.jpeg" },
    { id: 3, nome: "Ração Premium para Gatos", preco: "R$ 39,99", categoria: "racoes", Image: "/Home/food+_3.jpeg" },
    { id: 4, nome: "Peixinho Fofo", preco: "R$ 9,99", categoria: "acessorio", Image: "/Home/brinquedo_cat_1.jpeg" },
    { id: 5, nome: "Pote para gatos", preco: "R$ 15,99", categoria: "acessorio", Image: "/Home/img_pote_Cat.jpeg" },
    { id: 6, nome: "Caça Ativa", preco: "R$ 9,99", categoria: "acessorio", Image: "/Home/brinquedo_cat_2.jpeg" },
    { id: 7, nome: "Hidrante Divertido", preco: "R$ 9,99", categoria: "acessorio", Image: "/Home/brinquedo_dog_2.jpeg" },
    { id: 8, nome: "Osso Divertido", preco: "R$ 10,99", categoria: "acessorio", Image: "/Home/briquendo_dog_1.jpeg" },
    { id: 9, nome: "Caminha para gatos", preco: "R$ 59,99", categoria: "camas", Image: "/Home/caminha_Cat.jpeg" },
    { id: 10, nome: "Pote para cachorros", preco: "R$ 19,99", categoria: "acessorio", Image: "/Home/img_pote_dog.jpeg" },
    { id: 11, nome: "Caminha para cachorros", preco: "R$ 79,99", categoria: "camas", Image: "/Home/cama_dog.jpg" },
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
