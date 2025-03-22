import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeuilletempsComponent } from './components/feuilletemps/feuilletemps.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeuilletempsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
