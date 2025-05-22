import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../services/localStorage';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {

  usuario: string = '';
  nome: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  email: string = '';
  cnpj: string = '';
  loja: string = '';
  imagemPreview: string | ArrayBuffer | null = null;
  caminhoImg: string = '';

  @ViewChild('form') form!: NgForm;

  constructor(private service: StorageService, private router: Router) {

  }

  ngOnInit(): void {
    const tipoUser = this.service.getLocal('tipoUser');

    this.usuario = tipoUser;

  }

  cadastrarVendedor() {

  }

  cadastrarCliente() {

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
