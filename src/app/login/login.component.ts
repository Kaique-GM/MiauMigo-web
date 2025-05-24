import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Cliente } from '../models/Cliente';
import { StorageService } from '../services/localStorage';
import { Vendedor } from '../models/Vendedor';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: StorageService) { }

  ngOnInit(): void {
    const usuarioSalvo = localStorage.getItem('user');

    if (usuarioSalvo !== null) {
      const usuario = JSON.parse(usuarioSalvo);

      if (usuario.tipo === 'cliente') {
        const existe = this.clientes.some(c => c.id === usuario.id);
        if (!existe) {
          this.clientes.push(usuario);
        }
      } else if (usuario.tipo == 'vendedor') {
        const existe = this.vendedores.some(v => v.id === usuario.id);
        if (!existe) {
          this.vendedores.push(usuario);
        }
      }
    }
  }

  clientes: Cliente[] = [
    { id: 1, username: "Adminilson", email: "admin@gmail.com", senha: "123", carrinho: [], favoritos: [], Image: '', tipo: 'cliente' }
  ];

  vendedores: Vendedor[] = [
    { id: 1, username: "vendedor_1", cnpj: '12.345.678/0001-95', loja: 'Best Loja', email: "vendedor@gmail.com", senha: "123", produtos: [], Image: '', tipo: 'vendedor' }
  ]

  perfilSelecionado: 'cliente' | 'vendedor' | null = null;
  gatinho: boolean = true;
  email: string = "";
  senha: string = "";
  msgError: string = "";

  @ViewChild('form') form!: NgForm;

  selecionarPerfil(perfil: 'cliente' | 'vendedor') {
    this.perfilSelecionado = perfil;
  }

  ultimoId(perfil: string): number {
    if (perfil === 'cliente') {
      return this.clientes.length ? Math.max(...this.clientes.map(c => c.id)) : 0;
    } else if (perfil === 'vendedor') {
      return this.vendedores.length ? Math.max(...this.vendedores.map(v => v.id)) : 0;
    } else {
      return 0;
    }
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

    if (perfil === 'vendedor') {
      const usuarioEncontrado = this.vendedores.find(
        (vendedor) => vendedor.email === this.email && vendedor.senha === this.senha
      );

      if (usuarioEncontrado) {
        this.router.navigate(['perfil']);
        this.service.setLocal('user', usuarioEncontrado);
      }

      else {
        this.msgError = 'Credenciais incorretas. Verifique e tente novamente.';
      }
    }


  }

  cadastro(tipoUser: string) {
    this.service.setLocal('id', this.ultimoId(tipoUser) + 1);
    this.service.setLocal('tipoUser', tipoUser);
    this.router.navigate(['cadastro']);
  }

  voltar() {
    this.perfilSelecionado = null;
  }
}
