import {
  likePhoto,
  dislikePhoto,
  loadPhotosSuccess,
  updatePhotoSuccess,
} from './photo.actions';
import { createReducer, on } from '@ngrx/store';
import { Photo } from '../photo/photo';

export interface PhotoState {
  photos: Photo[];
}

const initialState: PhotoState = {
  photos: [],
};

export const photoReducer = createReducer(
  initialState,
  on(updatePhotoSuccess, (state, { payload }) => {
    state = {
      ...state,
      photos: state.photos.map((photo) => {
        if (photo.id === payload.id) {
          return payload;
        } else {
          return photo;
        }
      }),
    };
    return state;
  }),
  on(loadPhotosSuccess, (state, { payload }) => {
    state = {
      ...state,
      photos: payload,
    };
    return state;
  })
);
