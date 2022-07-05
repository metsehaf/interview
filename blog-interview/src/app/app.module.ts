import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsCardComponent } from './components/post-card/post-card.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { MatCardModule } from '@angular/material/card';
import { BlogService } from './services/blog-service';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { CreatPostComponent } from './components/creat-post/creat-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostFormComponent,
    PostDetailComponent,
    HeaderComponent,
    PostsCardComponent,
    CreatPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
