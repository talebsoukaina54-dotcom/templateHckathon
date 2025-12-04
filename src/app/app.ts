import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {Section} from './section/section';
import {About} from './about/about';  
import { VideoSection } from './video-section/video-section';
import { Experiances } from './experiances/experiances';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar ,Section, About, VideoSection, Experiances, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hackatonProjet');
}
