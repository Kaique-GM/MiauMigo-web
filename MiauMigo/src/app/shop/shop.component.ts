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
  noProductsFound: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.filter = params['search'] || '';
    });
  }

  produtos = [
    { id: 1, name: 'Ração Premium', description: 'Para cães adultos', price: 99.90, imagem: 'assets/caminha.jpg' },
    { id: 2, name: 'Brinquedo Mordedor', description: 'Ideal para cães pequenos', price: 29.90, imagem: 'assets/caminha.jpg' },
    { id: 3, name: 'Areia Higiênica', description: 'Para gatos', price: 49.90, imagem: 'assets/caminha.jpg' },
    { id: 4, name: 'Caminha Pet', preco: 120.00, description: 'Para gatos', imagem: 'assets/caminha.jpg', },

  ];

  get filteredProducts() {
    if (!this.filter.trim()) {
      return this.produtos;
    }
    else {
      const filtered = this.produtos.filter(p => p.name.toLowerCase().includes(this.filter.toLowerCase()));

      if (filtered.length === 0) {
        this.noProductsFound = true;
      } else {
        this.noProductsFound = false;
      }

      return filtered;

    }

  }

}
