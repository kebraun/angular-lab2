import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Fourth Post',
      thought: '........................banana bois',
    },
    {
      title: 'Third Post',
      thought: 'Heres a witty post about angular',
    },
    {
      title: 'Second Post',
      thought: 'I wish I could think of something funny to say',
    },
    {
      title: 'First Post',
      thought: 'Hello World!',
    },
  ];
  constructor() {}
  onDelete(index) {
    this.posts.splice(index, 1);
  }

  onSubmit(post: Post) {
    this.posts.unshift(post);
  }
  ngOnInit(): void {}
}
