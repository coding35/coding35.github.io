import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './main/components/content-list/content-list.component';
import { ContentComponent } from './main/components/content/content.component';
import { ResearchComponent } from './main/components/research/research.component';


const routes: Routes = [
  { path: 'research/:id', component: ResearchComponent, data: { page: 'research' } },
  { path: 'research', component: ContentListComponent, data: { page: 'research' } },
  { path: 'video/:id', component: ContentComponent, data: { page: 'video' } },
  { path: 'video', component: ContentListComponent, data: { page: 'video' } },
  { path: 'book/:id', component: ContentComponent, data: { page: 'book' } },
  { path: 'book', component: ContentListComponent, data: { page: 'book' } },
  { path: '**', component: ContentListComponent, data: { page: 'research' } },
  { path: '', component: ContentListComponent, data: { page: 'research' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
