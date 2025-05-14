import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/localStorage';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  id: number = 0;
  nome: string = "";
  preco: string = "";
  descricao: string = "";
  Image: string = "";
  nota: number = 0;
  vendedor: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private service: StorageService) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ?? 0;

    const dados = this.service.getLocal('produtoInfo');

    this.nome = dados.nome;
    this.preco = dados.preco;
    this.descricao = dados.descricao;
    this.Image = dados.Image;
    this.nota = dados.nota;
    this.vendedor = dados.vendedor;
  }


  newComment: string = '';
  comments = [
    {
      name: 'Lívia Fusquini',
      text: 'Excelente! Meus pets adoram.',
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

  buy(){
    this.router.navigate(['**'])
  }
}