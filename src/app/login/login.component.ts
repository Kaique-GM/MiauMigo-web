import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Cliente } from '../models/Cliente';
import { StorageService } from '../services/localStorage';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private service: StorageService) { }

  clientes: Cliente[] = [
    { id: 1, username: "Adminilson", email: "admin@gmail.com", senha: "123", carrinho: [], favoritos: [], Image: '', tipo: 'cliente' }
  ];

  perfilSelecionado: 'cliente' | 'vendedor' | null = null;
  gatinho: boolean = true;
  email: string = "";
  senha: string = "";
  msgError: string = "";

  @ViewChild('form') form!: NgForm;

  selecionarPerfil(perfil: 'cliente' | 'vendedor') {
    this.perfilSelecionado = perfil;
  }

  login(perfil: string) {

    if (this.form.invalid) {
      this.gatinho = false;
      return;
    }

    if (perfil === 'cliente') {
      const usuarioEncontrado = this.clientes.find(
        (cliente) => cliente.email === this.email && cliente.senha === this.senha
      );

      if (usuarioEncontrado) {
        this.router.navigate(['home']);
        this.service.setLocal('user', usuarioEncontrado);
      }

      else {
        this.msgError = 'Credenciais incorretas. Verifique e tente novamente.';
      }
    }


  }

  voltar() {
    this.perfilSelecionado = null;
  }

  cadastro(tipoUser: string) {
    this.service.setLocal('tipoUser', tipoUser);
    this.router.navigate(['cadastro']);
  }
}
