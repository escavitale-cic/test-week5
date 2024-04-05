import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts-service/posts.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  errorMessage: string;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsService.getPosts()
      .pipe(
        catchError(error => {
          this.errorMessage = 'Lista di post non disponibile';
          this.router.navigateByUrl('/src/app/Errore/error.component.html'); // Componente Errore
          return throwError(() => new Error(error));
        })
      )
      .subscribe((posts: Post[]) => {
        if (posts) {
          this.posts = posts
            .filter(post => post.userId === 1)
            .sort((a, b) => a.title.localeCompare(b.title));
        }
      });
  }
}
