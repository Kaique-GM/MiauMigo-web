import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  category: string = '';

  categorias = [
    { nome: "Acessórios", categoria: "acessorio", quant: 84, Image: "/Home/img_acessorios.jpeg" },
    { nome: "Rações", categoria: "racoes", quant: 64, Image: "/Home/img_racoes.jpeg" },
    { nome: "Camas e Tocas", categoria: "camas", quant: 22, Image: "/Home/img_camas.jpeg" },
    { nome: "Higiene e Cuidados", categoria: "higiene", quant: 16, Image: "/Home/img_higiene.jpeg" },
  ]

  linha_premium = [
    { id: 1, nome: "Ração Premium para Cães", preco: "R$ 49,99", categoria: "racoes", Image: "/Home/food+_1.jpeg" },
    { id: 2, nome: "Combo Ração Premium para Cães", preco: "R$ 84,99", categoria: "racoes", Image: "/Home/food+_2.jpeg" },
    { id: 3, nome: "Ração Premium para Gatos", preco: "R$ 39,99", categoria: "racoes", Image: "/Home/food+_3.jpeg" },
  ]

  top_vendas = [
    { id: 4, nome: "Peixinho Fofo", preco: "R$ 9,99", categoria: "acessorio", Image: "/Home/brinquedo_cat_1.jpeg" },
    { id: 5, nome: "Pote para gatos", preco: "R$ 15,99", categoria: "acessorio", Image: "/Home/img_pote_Cat.jpeg" },
    { id: 6, nome: "Caça Ativa", preco: "R$ 9,99", categoria: "acessorio", Image: "/Home/brinquedo_cat_2.jpeg" },
    { id: 7, nome: "Hidrante Divertido", preco: "R$ 9,99", categoria: "acessorio", Image: "/Home/brinquedo_dog_2.jpeg" },
    { id: 8, nome: "Osso Divertido", preco: "R$ 10,99", categoria: "acessorio", Image: "/Home/briquendo_dog_1.jpeg" },
    { id: 9, nome: "Caminha para gatos", preco: "R$ 59,99", categoria: "camas", Image: "/Home/caminha_Cat.jpeg" },
    { id: 10, nome: "Pote para cachorros", preco: "R$ 19,99", categoria: "acessorio", Image: "/Home/img_pote_dog.jpeg" },
    { id: 11, nome: "Caminha para cachorros", preco: "R$ 79,99", categoria: "camas", Image: "/Home/cama_dog.jpg" },
  ]

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
}
