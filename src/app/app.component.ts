import { PhotoService } from './photo/photo.service';
import {
  likePhoto,
  dislikePhoto,
  loadPhotosSuccess,
  loadPhotos,
  updatePhotoSuccess,
} from './store/photo.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PhotoState } from './store/photo.reducer';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'photos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subscription?: Subscription;
  photo$ = this.store.select('photo').pipe(map((res) => res.photos));
  constructor(
    private store: Store<{ photo: PhotoState }>,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadPhotos());
  }

  onLike(id: string): void {
    if (id) {
      this.store.dispatch(likePhoto({ payload: id }));
    }
  }
  onDislike(id: string): void {
    this.store.dispatch(dislikePhoto({ payload: id }));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
