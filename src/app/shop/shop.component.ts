import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { produto } from '../models/produto';
import { StorageService } from '../services/localStorage';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  filter: string = '';
  category: string = '';
  caminhoImg: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private service: StorageService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.filter = params['search'] || '';
      this.category = params['category'] || '';
    });

    const novoProduto = localStorage.getItem('novoProduto');

    if (novoProduto !== null) {
      const produto = JSON.parse(novoProduto);

      produto.id = this.ultimoId();
      this.caminhoImg = '/Anunciar/' + produto.Image;
      produto.Image = this.caminhoImg;
      this.produtos.push(produto);

    }

  }

  categorias = [
    { nome: "Higiene e Cuidados", categoria: "higiene", img: "/Shop/sapo.png" },
    { nome: "Rações", categoria: "racoes", img: "/Shop/dog_food.png" },
    { nome: "Todas", categoria: "", img: "/Icons/cat.png" },
    { nome: "Acessórios", categoria: "acessorio", img: "/Home/furao.png" },
    { nome: "Camas e Tocas", categoria: "camas", img: "/Shop/sleep_bird.png" },
  ]

  produtos: produto[] = [
    { id: 12, nome: "Garrafa Portátil de Água para Pets", preco: "R$ 29,99", categoria: "acessorio", Image: "/Shop/produtos/acc_3.jpeg", descricao: "Ideal para passeios, essa garrafa mantém seu pet hidratado com praticidade.", nota: 4, vendedor: "PetAmor" },
    { id: 13, nome: "Cama Redonda Luxo para Gatos", preco: "R$ 69,90", categoria: "camas", Image: "/Shop/produtos/cama_1.jpeg", descricao: "Cama super confortável e macia, perfeita para o descanso dos felinos.", nota: 5, vendedor: "GatoMimos" },
    { id: 14, nome: "Ração Úmida para Gatos", preco: "R$ 7,50", categoria: "racoes", Image: "/Shop/produtos/racao_2.jpeg", descricao: "Ração úmida rica em nutrientes, ideal para complementar a alimentação do seu gato.", nota: 3, vendedor: "NutriPet" },
    { id: 15, nome: "Coleira com GPS para Cães", preco: "R$ 89,90", categoria: "acessorio", Image: "/Shop/produtos/acc_1.jpeg", descricao: "Coleira com localizador GPS para garantir a segurança do seu pet em todos os momentos.", nota: 2, vendedor: "PetAmor" },
    { id: 16, nome: "Cama Portátil para Viagens", preco: "R$ 59,90", categoria: "camas", Image: "/Shop/produtos/cama_4.jpeg", descricao: "Leve e dobrável, essa caminha é ideal para viagens e deslocamentos com seu pet.", nota: 1, vendedor: "PetVibe" },
    { id: 17, nome: "Brinquedo Inteligente para Gatos", preco: "R$ 25,00", categoria: "acessorio", Image: "/Shop/produtos/acc_2.jpeg", descricao: "Estimule o instinto caçador do seu gato com este brinquedo interativo e divertido.", nota: 5, vendedor: "GatoMimos" },
    { id: 18, nome: "Ração Natural para Cães Adultos", preco: "R$ 52,99", categoria: "racoes", Image: "/Shop/produtos/racao_1.jpeg", descricao: "Ração balanceada com ingredientes naturais, ideal para a saúde dos cães adultos.", nota: 3, vendedor: "NutriPet" },
    { id: 19, nome: "Cama com Cobertura para Cães", preco: "R$ 89,99", categoria: "camas", Image: "/Shop/produtos/cama_2.jpeg", descricao: "Conforto e proteção em uma cama com cobertura, perfeita para cães que gostam de se esconder.", nota: 2, vendedor: "PetVibe" },
    { id: 20, nome: "Coleira Estampada para Gatos", preco: "R$ 14,99", categoria: "acessorio", Image: "/Shop/produtos/acc_4.jpeg", descricao: "Coleira charmosa com estampa divertida, pensada para conforto e estilo dos felinos.", nota: 4, vendedor: "PetAmor" },
    { id: 21, nome: "Caminha Térmica para Inverno", preco: "R$ 99,99", categoria: "camas", Image: "/Shop/produtos/cama_3.jpeg", descricao: "Perfeita para os dias frios, essa caminha térmica mantém seu pet aquecido e confortável.", nota: 5, vendedor: "GatoMimos" },
    { id: 22, nome: "Ração Light para Gatos Castrados", preco: "R$ 45,90", categoria: "racoes", Image: "/Shop/produtos/racao_4.jpeg", descricao: "Especialmente desenvolvida para gatos castrados, ajuda no controle de peso e bem-estar.", nota: 2, vendedor: "NutriPet" },
    { id: 23, nome: "Snack Saudável para Cães", preco: "R$ 12,99", categoria: "racoes", Image: "/Shop/produtos/racao_3.jpeg", descricao: "Petisco natural e nutritivo, ideal como recompensa no adestramento ou mimo diário.", nota: 3, vendedor: "PetVibe" }
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


  ultimoId(): number {
    return this.produtos.length ? Math.max(...this.produtos.map(c => c.id)) : 0;
  }
}