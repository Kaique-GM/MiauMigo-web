import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  newComment: string = '';
  comments = [
    {
      name: 'Lívia Fusquini',
      text: 'Excelente ração! Meus gatos adoram.',
      rating: 4
    },
    {
      name: 'Rogério Ribeiro',
      text: 'Boa qualidade, entrega rápida.',
      rating: 5
    }
  ];

  sendComment() {
    if (this.newComment.trim()) {
      this.comments.push({
        name: 'Novo Usuário',
        text: this.newComment,
        rating: 4
      });
      this.newComment = '';
    }
  }
}