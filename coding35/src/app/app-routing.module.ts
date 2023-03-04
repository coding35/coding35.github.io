import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './main/components/blog/blog.component';
import { ContentComponent } from './main/components/content/content.component';


const routes: Routes = [
  { path: 'blog/:id', component: BlogComponent, data: { page: 'blog' } },
  { path: 'video', component: ContentComponent, data: { page: 'video' } },
  { path: '', component: BlogComponent, data: { page: 'blog' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
