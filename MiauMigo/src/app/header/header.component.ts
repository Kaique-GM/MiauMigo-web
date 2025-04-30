import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive , FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  filter: string = '';

  home() {
    this.router.navigate(['/home']);
  }


  search() {
    console.log('Imagem clicada!');
    if (this.filter) {
      this.router.navigate(['/shop'], { queryParams: { search: this.filter } });
    }else{
      this.router.navigate(['/shop']);
    }

  }

}
