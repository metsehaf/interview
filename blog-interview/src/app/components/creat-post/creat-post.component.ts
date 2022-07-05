import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog-service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-creat-post',
  templateUrl: './creat-post.component.html',
  styleUrls: ['./creat-post.component.scss'],
})
export class CreatPostComponent implements OnInit {
  title!: FormControl;
  description!: FormControl;

  constructor(
    private fb: FormBuilder,
    private _blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createPostForm();
  }

  createPostForm() {
    this.title = this.fb.control(null);
    this.description = this.fb.control(null);
  }

  submitPost() {
    const post: Post = {
      title: this.title.value,
      content: this.description.value,
    };
    if (this.validateTitle()) {
      this._blogService.createPost(post).subscribe((success) => {
        if (success) {
          this.router.navigate(['/posts']);
        }
      });
    }
  }

  validateTitle() {
    return this.validError();
  }

  validError() {
    if (this.title.value === null || this.title.value === '') {
      this.title.setErrors({ invalid: true });
      return;
    }
    this.title.setErrors(null);
    return true;
  }
}
