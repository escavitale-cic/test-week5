import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/singlepost-service/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  selectedPost: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    let postId = this.route.snapshot.paramMap.get('id'); // Correct parameter name 'id'
    this.postService.getSinglePost(parseInt(postId, 10))
    .subscribe((res) => {
      this.selectedPost = res as Post;
    });
  }
}
