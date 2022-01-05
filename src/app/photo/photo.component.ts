import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Photo } from './photo';

@Component({
  selector: 'photos-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  @Input() photo?: Photo | null;

  @Output() like = new EventEmitter();
  @Output() dislike = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onLike(id: string): void {
    this.like.emit(id);
  }
  onDislike(id: string): void {
    this.dislike.emit(id);
  }
}
