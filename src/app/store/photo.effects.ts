import {
  dislikePhoto,
  likePhoto,
  loadPhotos,
  loadPhotosError,
  loadPhotosSuccess,
  updatePhotoError,
  updatePhotoSuccess,
} from './photo.actions';
import { PhotoService } from './../photo/photo.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { Photo } from '../photo/photo';

@Injectable()
export class PhotoEffects {
  constructor(private actions$: Actions, private photoService: PhotoService) {}

  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotos),
      switchMap(() =>
        this.photoService.getPhoto().pipe(
          map((photos: Photo[]) => loadPhotosSuccess({ payload: photos })),
          catchError(() => of(loadPhotosError()))
        )
      )
    )
  );

  likePhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(likePhoto),
      mergeMap(({ payload }) =>
        this.photoService.likePhoto(payload).pipe(
          map((photo: Photo) => updatePhotoSuccess({ payload: photo })),
          catchError(() => of(updatePhotoError()))
        )
      )
    )
  );

  dislikePhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dislikePhoto),
      mergeMap(({ payload }) =>
        this.photoService.dislikePhoto(payload).pipe(
          map((photo: Photo) => updatePhotoSuccess({ payload: photo })),
          catchError(() => of(updatePhotoError()))
        )
      )
    )
  );
}
