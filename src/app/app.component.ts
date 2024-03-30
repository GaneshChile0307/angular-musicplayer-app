import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicPlayerMainPageComponent } from './components/music-player-main-page/music-player-main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MusicPlayerMainPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-player';
}
