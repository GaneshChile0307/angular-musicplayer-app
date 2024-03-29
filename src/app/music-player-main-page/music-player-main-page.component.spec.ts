import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayerMainPageComponent } from './music-player-main-page.component';

describe('MusicPlayerMainPageComponent', () => {
  let component: MusicPlayerMainPageComponent;
  let fixture: ComponentFixture<MusicPlayerMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicPlayerMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicPlayerMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
