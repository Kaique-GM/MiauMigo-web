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

  categorias = [
    { nome: "Acessórios", quant: 84, Image: "/Home/img_acessorios.jpeg" },
    { nome: "Rações", quant: 64, Image: "/Home/img_racoes.jpeg" },
    { nome: "Camas e Tocas", quant: 22, Image: "/Home/img_camas.jpeg" },
    { nome: "Higiene e Cuidados", quant: 16, Image: "/Home/img_higiene.jpeg" },
  ]

  linha_premium = [
    { nome: "Ração Premium para Cães", preco: "R$ 49,99", Image: "/Home/food+_1.jpeg" },
    { nome: "Combo Ração Premium para Cães", preco: "R$ 84,99", Image: "/Home/food+_2.jpeg" },
    { nome: "Ração Premium para Gatos", preco: "R$ 39,99", Image: "/Home/food+_3.jpeg" },
  ]

  top_vendas = [
    { nome: "Peixinho Fofo", preco: "R$ 9,99", Image: "/Home/brinquedo_cat_1.jpeg" },
    { nome: "Pote para gatos", preco: "R$ 15,99", Image: "/Home/img_pote_Cat.jpeg" },
    { nome: "Caça Ativa", preco: "R$ 9,99", Image: "/Home/brinquedo_cat_2.jpeg" },
    { nome: "Hidrante Divertido", preco: "R$ 9,99", Image: "/Home/brinquedo_dog_2.jpeg" },
    { nome: "Osso Divertido", preco: "R$ 10,99", Image: "/Home/briquendo_dog_1.jpeg" },
    { nome: "Caminha para gatos", preco: "R$ 59,99", Image: "/Home/caminha_Cat.jpeg" },
    { nome: "Pote para cachorros", preco: "R$ 19,99", Image: "/Home/img_pote_dog.jpeg" },
    { nome: "Caminha para cachorros", preco: "R$ 79,99", Image: "/Home/cama_dog.jpg" },
  ]

  comprar() {
    this.router.navigate(['/shop']);
  }

  anunciar() {
    this.router.navigate(['/anunciar']);
  }
}
