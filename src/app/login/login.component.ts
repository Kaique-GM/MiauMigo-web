import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  perfilSelecionado: 'cliente' | 'vendedor' | null = null;
  gatinho: boolean = true;

  email: string = "";
  senha: string = "";

  @ViewChild('form') form!: NgForm;

  selecionarPerfil(perfil: 'cliente' | 'vendedor') {
    this.perfilSelecionado = perfil;
  }

  login(usuario: string) {
    this.gatinho = false;
  }

  voltar() {
    this.perfilSelecionado = null;
  }
}
