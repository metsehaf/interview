import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss'],
})
export class PostsCardComponent {
  @Input() posts: Post[] = [];
  @Output() postId = new EventEmitter<number>();
  constructor() {}

  deletePost(id: number | undefined) {
    this.postId.emit(id);
  }
}
