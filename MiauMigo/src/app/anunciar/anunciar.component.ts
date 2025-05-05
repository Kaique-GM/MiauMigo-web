import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-anunciar',
  imports: [CommonModule, FormsModule],
  templateUrl: './anunciar.component.html',
  styleUrls: ['./anunciar.component.css']
})
export class AnunciarComponent {
  fotosPreview: string[] = [];
  produtoAnunciado: boolean = false;
  formInvalido: boolean = false;

  dadosForm = {
    marca: '',
    preco: '',
    titulo: '',
    quantidade: ''
    // Adicione outros campos conforme necessário
  };

  abrirSeletorDeImagem(): void {
    const input = document.getElementById('fotoInput') as HTMLInputElement;
    input.click();
  }

  onFotosSelecionadas(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      Array.from(input.files).forEach(file => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => {
            const result = e.target?.result as string;
            this.fotosPreview.push(result);
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }

  removerFoto(index: number): void {
    this.fotosPreview.splice(index, 1);
  }

  anunciarProduto(form: NgForm): void {
    if (form.invalid) {
      this.formInvalido = true;
      this.produtoAnunciado = false;
      setTimeout(() => this.formInvalido = false, 3000);
      return;
    }

    this.produtoAnunciado = true;
    this.formInvalido = false;
    setTimeout(() => this.produtoAnunciado = false, 3000);

    // Aqui você pode enviar os dados para o backend se desejar.
  }

  permitirApenasNumeros(event: KeyboardEvent): void {
    const allowedChars = /[0-9.,]/;
    const inputChar = String.fromCharCode(event.keyCode);
    if (!allowedChars.test(inputChar)) {
      event.preventDefault();
    }
  }
  
}