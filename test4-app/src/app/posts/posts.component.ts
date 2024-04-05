import { Component } from '@angular/core';
import { PostsService } from '../services/posts-service/posts.service';
import { Post } from '../models/post.model';
import { PostService } from '../services/singlepost-service/post.service';
import { Router } from '@angular/router';

import { Observable, filter, map } from 'rxjs';
import { Store, select } from '@ngrx/store';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: Post[];

  lastViewed$: Observable <number>;

  constructor(private store: Store, private postsService: PostsService,private postService: PostService, private router: Router) { }
  
  ngOnInit() {
    /* this.lastViewed$ = this.store.select(state => state.post); */
    // data filtered showing only posts with userId equal to 1
    const filteredData = this.postsService.getPosts().pipe(
      map((data:Post[]) => data.filter((post) => post.userId === 1) )
    )
    const resInAlphabOrder = filteredData.pipe(  
      map((data:Post[]) => data.sort((x, y) => x.title.localeCompare(y.title))))
      
      //results in Alphabetical order
      resInAlphabOrder.subscribe(res => this.posts = res);
      
    }

    onPostClick(post) {
      
      this.store.dispatch({ type: '[Post] Last Viewed Post', payload: { id: post.id} });
    }

}

