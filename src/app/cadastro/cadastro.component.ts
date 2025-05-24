import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../services/localStorage';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendedor } from '../models/Vendedor';
import { Cliente } from '../models/Cliente';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {

  usuario: string = '';
  id: number = 0;
  nome: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  email: string = '';
  cnpj: string = '';
  loja: string = '';
  imagemPreview: string | ArrayBuffer | null = null;
  caminhoImg: string = '';
  gatinho: boolean = true;

  vendedor: Vendedor = {
    cnpj: '',
    tipo: 'vendedor',
    produtos: [],
    loja: '',
    id: 0,
    username: '',
    email: '',
    senha: '',
    Image: ''
  };

  cliente: Cliente = {
    favoritos: [],
    carrinho: [],
    tipo: 'cliente',
    id: 0,
    username: '',
    email: '',
    senha: '',
    Image: ''
  }


  @ViewChild('form') form!: NgForm;

  constructor(private service: StorageService, private router: Router) {

  }

  ngOnInit(): void {
    const tipoUser = this.service.getLocal('tipoUser');
    const ultimoId = this.service.getLocal('id');

    this.usuario = tipoUser;
    this.id = ultimoId;
  }

  cadastrarVendedor() {
    if (this.form.invalid) {
      this.gatinho = false;
      return;
    }

    this.vendedor.id = this.id;
    this.vendedor.cnpj = this.cnpj;
    this.vendedor.email = this.email;
    this.vendedor.username = this.nome;
    this.vendedor.Image = this.caminhoImg;
    this.vendedor.senha = this.senha;
    this.vendedor.loja = this.loja;

    this.router.navigate(['perfil']);
    this.service.setLocal('user', this.vendedor);
  }

  cadastrarCliente() {
    if (this.form.invalid) {
      this.gatinho = false;
      return;
    }

    this.cliente.id = this.id;
    this.cliente.username = this.nome;
    this.cliente.email = this.email;
    this.cliente.senha = this.senha;
    this.cliente.Image = this.caminhoImg;

    this.service.setLocal('user', this.cliente);
    this.router.navigate(['home']);
  }

  voltar() {
    this.router.navigate(['login']);
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
}
