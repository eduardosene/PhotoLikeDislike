import { Photo } from './../photo/photo';
import { createAction, props } from '@ngrx/store';

export const likePhoto = createAction(
  '[Photo List] Like Photo',
  props<{ payload: string }>()
);
export const dislikePhoto = createAction(
  '[Photo List] Dislike Photo',
  props<{ payload: string }>()
);

export const loadPhotos = createAction('[Photo List] Load Photos');
export const loadPhotosSuccess = createAction(
  '[Photo List] Load Photos Sucess',
  props<{ payload: Photo[] }>()
);
export const loadPhotosError = createAction('[Photo List] Load Photos Error');

export const updatePhotoSuccess = createAction(
  '[Photo List] Update Photo Success',
  props<{ payload: Photo }>()
);

export const updatePhotoError = createAction(
  '[Photo List] Updadte Photo Error'
);
