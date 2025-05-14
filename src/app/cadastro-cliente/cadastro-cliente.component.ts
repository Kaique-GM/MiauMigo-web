import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-cadastro-cliente',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {
  usuario: Usuario = {
    id: 0,
    email: '',
    senha: '',
    confirmacaoSenha: '',
    ativo: false
  };

  @ViewChild('form') form!: NgForm;
  salvar() {
    if (this.form.valid) {
      console.log('Usuário salvo:', this.usuario);
      alert('Usuário salvo com sucesso!');
    }
  }

}
