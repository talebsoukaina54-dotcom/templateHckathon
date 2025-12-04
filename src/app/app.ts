import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {Section} from './section/section';
import {About} from './about/about';  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar ,Section, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hackatonProjet');
}
