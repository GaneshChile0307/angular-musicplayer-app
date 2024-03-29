import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicPlayerMainPageComponent } from './music-player-main-page/music-player-main-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MusicPlayerMainPageComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-player';
}
