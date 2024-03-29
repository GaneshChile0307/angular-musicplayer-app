import { Component, OnInit } from '@angular/core';
import { ISong } from '../models/songs';
import { CommonModule,NgFor } from '@angular/common';



@Component({
  selector: 'app-music-player-main-page',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './music-player-main-page.component.html',
  styleUrl: './music-player-main-page.component.scss'
})
export class MusicPlayerMainPageComponent implements OnInit{
  
  
  // Define audio class object to interact with songs
  audio = new Audio();
 
  //playing status to maintain the playing song
  isPlaying = false;

  // Variable to store the current song index which is being played
  currentTrackIndex = 0;

  // Variable to store the current playback time
  currentPlaybackTime = 0;
  // Variable to store the progress of the currently playing song
  progress = 0;
  // Variable to store the interval ID for updating the progress
  progressInterval: any;

  playlist: ISong[] = [
    { id:1, songArtist: 'Ed Sheeran', songTitle:"Perfect", songUrl: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3', coverArt: './assets/songsCoverArt/coverArt1.jpg' },
    { id:2,  songArtist: 'Nusrat Fateh Ali Khan', songTitle:"Man Atkeya Beparwah", songUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3', coverArt: './assets/songsCoverArt/coverArt2.jpg' },
  ];

  constructor(){}

  ngOnInit(): void {
  // this.play()
  // Start updating the progress continuously
    this.startProgressInterval();
  }

  play() {
    if (!this.isPlaying) {
      this.audio.src = this.playlist[this.currentTrackIndex].songUrl;
      this.audio.currentTime = this.currentPlaybackTime;
      this.audio.play();
      this.isPlaying = true;
    } else {
     this.pause()
    }
  }

  pause() {
    // Store the current playback time before pausing
    this.currentPlaybackTime = this.audio.currentTime;
    this.audio.pause();
    this.isPlaying = false;
  }

  nextTrack() {
    this.currentTrackIndex++;
    if (this.currentTrackIndex >= this.playlist.length) {
      this.currentTrackIndex = 0;
    }
    // this.play();
    this.audio.src = this.playlist[this.currentTrackIndex].songUrl;
    this.audio.play();
    this.isPlaying = true;
   
  }

  previousTrack() {
    this.currentTrackIndex--;
    if (this.currentTrackIndex < 0) {
      this.currentTrackIndex = this.playlist.length - 1;
    }
    // this.play();
    this.audio.src = this.playlist[this.currentTrackIndex].songUrl;
    this.audio.play();
    this.isPlaying = true;
  
  }

  stopTrack(){
    //when click on stioTrack , this,audio should be started from very start of current song 
    this.currentPlaybackTime = 0
    this.audio.currentTime = this.currentPlaybackTime;
    this.audio.play();
    this.isPlaying = true;
  }

  getSongCover() {
    return this.playlist[this.currentTrackIndex].coverArt;
  }

  getSongName() {
    return this.playlist[this.currentTrackIndex].songTitle;
  }

  // Function to start updating the progress continuously
  startProgressInterval() {
    this.progressInterval = setInterval(() => {
      // Calculate the progress based on the current time and duration of the song
      this.progress = (this.audio.currentTime / this.audio.duration) * 100 || 0;
    }, 1000); // Update progress every second
  }

   // Function to stop updating the progress
   stopProgressInterval() {
    clearInterval(this.progressInterval);
  }

}



