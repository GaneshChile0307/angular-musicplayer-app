import { Injectable } from '@angular/core';
import { ISong } from '../models/songs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicListService {

  constructor() { }

  public getMusicList(): Observable<ISong[]> {
    const playlist: ISong[] = [
      {id:1,  songArtist: 'Ed Sheeran', songTitle: "Random Ed Sheeran Song", songUrl: './assets/songsUrl/songUrl1.mp3', coverArt: './assets/songsCoverArt/coverArt1.jpg' },
      {id:2,  songArtist: 'Pitbull', songTitle: "Random Pitbull Song", songUrl: './assets/songsUrl/songUrl2.mp3', coverArt: './assets/songsCoverArt/coverArt2.jpg' },
      {id:3,  songArtist: 'Rihana', songTitle: "Random Rihana Song", songUrl: './assets/songsUrl/songUrl3.mp3', coverArt: './assets/songsCoverArt/coverArt3.jpg' },
      {id:4,  songArtist: 'Drake', songTitle: "Random Drake Song", songUrl: './assets/songsUrl/songUrl2.mp3', coverArt: './assets/songsCoverArt/coverArt2.jpg' },
    ];
    return of(playlist);
  }
  
}
