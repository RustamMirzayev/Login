import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tailwindtask1Component } from "./tailwindtask1/tailwindtask1.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tailwindtask1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angulartailwind';
}
