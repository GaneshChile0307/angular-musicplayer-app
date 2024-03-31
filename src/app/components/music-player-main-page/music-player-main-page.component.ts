import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISong } from '../../models/songs';
import { CommonModule } from '@angular/common'; // No need to import NgFor separately
import { MusicListService } from '../../services/music-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music-player-main-page',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './music-player-main-page.component.html',
  styleUrl: './music-player-main-page.component.scss'
})
export class MusicPlayerMainPageComponent implements OnInit, OnDestroy {

  // Define audio class object to interact with songs
  private audio = new Audio();

  //playing status to maintain the playing song
  public isPlaying: boolean = false;

  // Variable to store the current song index which is being played
  public currentTrackIndex : number = 0;

  // Variable to store the current playback time
  public currentPlaybackTime: number = 0;
  
  // Variable to store the progress of the currently playing song
  public progress : number = 0;

  // use to have inital selection of playlist song
  public currentTrackId: number = 1;
  
  // Variable to store the interval ID for updating the progress
  public progressInterval: any;

  //holds the data for playlist array
  public playlist: ISong[] = [];

  //use to subscribe the observal values from playlist
  private subscription!: Subscription;

  constructor(private musicListService: MusicListService) { }

  ngOnInit(): void {
    // Subscribe to the music list service to get the playlist
    this.subscribeToMusicList();

    // Start updating the progress continuously
    this.startProgressInterval();
  }

  public subscribeToMusicList(): void {
    this.subscription = this.musicListService.getMusicList().subscribe({
      next: (playlist: ISong[]) => {
        this.playlist = playlist;
      },
      error: (error: any) => {
        console.error('Error fetching music list:', error);
      }
    });
  }

  public play() : void {
    // Play the audio
    if (!this.isPlaying) {
      this.audio.src = this.getSongUrl(this.currentTrackId);
      this.audio.currentTime = this.currentPlaybackTime;
      this.audio.play();
      this.isPlaying = true;
      // Add event listener to handle next track when the current song finishes
      this.audio.addEventListener('ended', () => {
        this.nextTrack();
      });
    } else {
      this.pause();
    }
  }

  public pause() : void {
    // Pause the audio and store the current playback time
    this.currentPlaybackTime = this.audio.currentTime;
    this.audio.pause();
    this.isPlaying = false;
  }

  public nextTrack() : void {
    // Play the next track
    this.currentTrackId = this.getNextTrackId();
    this.audio.src = this.getSongUrl(this.currentTrackId);
    this.audio.play();
    this.isPlaying = true;
  }

  public previousTrack() : void {
    // Play the previous track
    this.currentTrackId = this.getPreviousTrackId();
    this.audio.src = this.getSongUrl(this.currentTrackId);
    this.audio.play();
    this.isPlaying = true;
  }

  public stopTrack() : void  {
    // Stop the current track
    this.audio.currentTime = 0;
    this.audio.play();
    this.isPlaying = true;
  }

  public getcurrentSongArtist() : string {
    // Get the artist of the current song
    return this.playlist.find(track => track.id === this.currentTrackId)?.songArtist || '';
  }

  public getSongCover() : any {
    // Get the cover art of the current song
    return this.playlist.find(track => track.id === this.currentTrackId)?.coverArt || '';
  }

  public getSongName() : string {
    // Get the name of the current song
    return this.playlist.find(track => track.id === this.currentTrackId)?.songTitle || '';
  }

  // Function to start updating the progress continuously
  public startProgressInterval() : void {
    this.progressInterval = setInterval(() => {
      this.progress = (this.audio.currentTime / this.audio.duration) * 100 || 0;
    }, 1000); // Update progress every second
  }

  public ngOnDestroy(): void {
    // Unsubscribe from the playlist subscription to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public getSongUrl(id: number): string {
    // Get the URL of a song based on its ID
    return this.playlist.find(track => track.id === id)?.songUrl || '';
  }

  public getCurrentTrackIndex(): number {
    // Get the index of the current track in the playlist
    const trackIndex = this.playlist.findIndex(track => track.id === this.currentTrackId);
    return trackIndex;
  }

  public getNextTrackId(): number {
    // Get the ID of the next track in the playlist
    this.currentTrackIndex = this.getCurrentTrackIndex();
    if (this.currentTrackIndex === -1 || this.playlist.length === 0) {
      return 0;
    }
    return this.playlist[(this.currentTrackIndex + 1) % this.playlist.length].id;
  }

  public getPreviousTrackId(): number {
    // Get the ID of the previous track in the playlist
    this.currentTrackIndex = this.getCurrentTrackIndex();
    if (this.currentTrackIndex === -1 || this.playlist.length === 0) {
      return 0;
    }
    return this.playlist[(this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length].id;
  }
}
