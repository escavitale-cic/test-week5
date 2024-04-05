import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { ErrorComponent } from './Errore/error.component'; // Import ErrorComponent

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'post-detail/:id', component: PostComponent },
  { path: 'error', component: ErrorComponent }, // Route al Componente Errore
  { path: '**', redirectTo: '/src/app/Errore/' } // Redirect to Errore route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
