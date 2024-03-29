import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player-main-page',
  standalone: true,
  imports: [],
  templateUrl: './music-player-main-page.component.html',
  styleUrl: './music-player-main-page.component.scss'
})
export class MusicPlayerMainPageComponent implements OnInit{

  isPlaying = false;
  currentTrackIndex = 0;
  playlist = [
    { name: 'Track 1', url: 'track1.mp3', coverArt: 'cover1.jpg' },
    { name: 'Track 2', url: 'track2.mp3', coverArt: 'cover2.jpg' },
    { name: 'Track 3', url: 'track3.mp3', coverArt: 'cover3.jpg' }
  ];

  constructor(){}

  ngOnInit(): void {
  }

  playPreviousSong(){

  }

  playAndPauseSong(){

  }

  playNextSong(){
    
  }

  getSongCover(){

  }

  getSongName(){
    
  }
}
