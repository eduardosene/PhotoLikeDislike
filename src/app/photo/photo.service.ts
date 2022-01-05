import { likePhoto, dislikePhoto } from './../store/photo.actions';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhoto(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${environment.REST_URL}/photos/`).pipe(
      catchError((_) => {
        throw 'Erro ao recuperar dados';
      })
    );
  }
  likePhoto(id: string): Observable<Photo> {
    return this.http
      .put<Photo>(`${environment.REST_URL}/photos/${id}/like`, null)
      .pipe(
        catchError((_) => {
          throw 'Erro ao carregar like';
        })
      );
  }

  dislikePhoto(id: string): Observable<Photo> {
    return this.http
      .put<Photo>(`${environment.REST_URL}/photos/${id}/dislike`, null)
      .pipe(
        catchError((_) => {
          throw 'Erro ao carregar o dislike';
        })
      );
  }
}
