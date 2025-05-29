import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiauMigo';

  @HostListener('window:beforeunload', ['$event'])
  clearLocalStorage(event: Event) {
    localStorage.clear();
  }
}
