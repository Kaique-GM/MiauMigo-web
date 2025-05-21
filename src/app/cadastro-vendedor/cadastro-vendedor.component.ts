import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Vendedor } from '../models/Vendedor';

@Component({
  selector: 'app-cadastro-vendedor',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-vendedor.component.html',
  styleUrl: './cadastro-vendedor.component.css'
})
export class CadastroVendedorComponent {
  // vendedor: Vendedor = {
  //   id: 0,
  //   cnpj: '',
  //   email: '',
  //   senha: '',
  //   ativo: false
  // };

  @ViewChild('form') form!: NgForm;
  salvar() {
    if (this.form.valid) {
      // console.log('Usuário salvo:', this.vendedor);
      alert('Usuário salvo com sucesso!');
    }
  }

}
