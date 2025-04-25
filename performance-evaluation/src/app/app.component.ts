import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,FormsModule,RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  templateUrl: './app.component.html',
  styles: [],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'performance-evaluation';
}
