import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { StorageService } from '../../services/localStorage';
import { Router } from '@angular/router';
import { produto } from '../../models/produto';

@Component({
  selector: 'app-anunciar',
  imports: [CommonModule, FormsModule],
  templateUrl: './anunciar.component.html',
  styleUrls: ['./anunciar.component.css']
})
export class AnunciarComponent {

  imagemPreview: string | ArrayBuffer | null = null;
  caminhoImg: string = '';
  nomeLoja: string = 'PetShop do Carlos';
  titulo: string = '';
  preco: string = '';
  quantidade: number = 0;
  descricao: string = '';
  produtoAnunciado: boolean = false;
  categoria: string = '';

  produto: produto = {
    id: 0,
    nota: 0,
    nome: '',
    preco: '',
    categoria: '',
    descricao: '',
    Image: '',
    vendedor: ''
  }

  @ViewChild('form') form!: NgForm;

  constructor(private service: StorageService, private router: Router) {

  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const img = input.files[0];
      this.caminhoImg = img.name;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result;
      };
      reader.readAsDataURL(img);
    }
  }

  removerImagem(): void {
    this.imagemPreview = null;
  }

  anunciarProduto() {
    if (this.form.invalid) {
      this.produtoAnunciado = false;
    }

    this.produto.nome = this.titulo;
    this.produto.descricao = this.descricao;
    this.produto.Image = this.caminhoImg;
    this.produto.categoria = this.categoria;
    this.produto.vendedor = this.nomeLoja;
    this.produto.preco = this.preco;

    this.service.setLocal('produtoInfo' , this.produto);
    this.produtoAnunciado = true;
  
  }

}