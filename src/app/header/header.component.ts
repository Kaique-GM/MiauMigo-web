import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    const usuarioSalvo = localStorage.getItem('user');
    if (usuarioSalvo !== null) {
      const usuario = JSON.parse(usuarioSalvo);

      this.session = true;
      this.tipo = usuario.tipo;

      if (usuario.Image !== '') {
        this.img = "/Login/" + usuario.Image;
      }
    }

  }

  session: boolean = false;
  filter: string = '';
  img: string = '';
  tipo: string = '';
  showDropdown: boolean = false;
  headerClass = '';

  onUserImgEnter() {
    this.headerClass = 'user-hover';
    this.showDropdown = true;
  }

  onUserImgLeave() {
    this.showDropdown = false;
    this.headerClass = '';
  }

  home() {
    this.router.navigate(['/home']);
  }


  search() {
    if (!this.filter.trim()) {
      this.router.navigate(['/shop']);
    } else {
      this.router.navigate(['/shop'], { queryParams: { search: this.filter } });
    }

    this.filter = '';
  }

  logout() {
    this.session = false;
    localStorage.clear();
    this.tipo = '';
    this.router.navigate(['/home']);
  }

}
