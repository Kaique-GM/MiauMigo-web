import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email: string = '';

  @ViewChild('form') form!: NgForm;

  enviarNewsletter() {

    if (this.form.valid) {
      alert(`Novidades serão enviadas para: ${this.email}`);
      this.email = '';
    }
  }
}
