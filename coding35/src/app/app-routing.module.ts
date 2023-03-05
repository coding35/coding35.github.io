import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './main/components/content-list/content-list.component';
import { PageComponent } from './main/components/page/page.component';


const routes: Routes = [
  { path: 'research/:id', component: PageComponent, data: { page: 'research' } },
  { path: 'research', component: ContentListComponent, data: { page: 'research' } },
  { path: 'video/:id', component: PageComponent, data: { page: 'video' } },
  { path: 'video', component: ContentListComponent, data: { page: 'video' } },
  { path: 'book/:id', component: PageComponent, data: { page: 'book' } },
  { path: 'book', component: ContentListComponent, data: { page: 'book' } },
  { path: 'category/:search', component: ContentListComponent, data: { page: 'category' } },
  { path: '**', component: ContentListComponent, data: { page: 'research' } },
  { path: '', component: ContentListComponent, data: { page: 'research' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
