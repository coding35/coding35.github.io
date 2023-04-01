import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/components/about/about.component';
import { ContactComponent } from './main/components/contact/contact.component';
import { ContentListComponent } from './main/components/content-list/content-list.component';
import { ForceDirectedTreeComponent } from './main/components/force-directed-tree/force-directed-tree.component';
import { PageComponent } from './main/components/page/page.component';


const routes: Routes = [
  { path: 'architecture/:id', component: PageComponent, data: { page: 'architecture' } },
  { path: 'architecture', component: ContentListComponent, data: { page: 'architecture' } },
  { path: 'design/:id', component: PageComponent, data: { page: 'design' } },
  { path: 'design', component: ContentListComponent, data: { page: 'design' } },
  { path: 'coding/:id', component: PageComponent, data: { page: 'coding' } },
  { path: 'coding', component: ContentListComponent, data: { page: 'coding' } },
  { path: 'database/:id', component: PageComponent, data: { page: 'database' } },
  { path: 'database', component: ContentListComponent, data: { page: 'database' } },
  { path: 'video/:id', component: PageComponent, data: { page: 'video' } },
  { path: 'video', component: ContentListComponent, data: { page: 'video' } },
  { path: 'productivity/:id', component: PageComponent, data: { page: 'productivity' } },
  { path: 'productivity', component: ContentListComponent, data: { page: 'productivity' } },
  { path: 'learning/:id', component: PageComponent, data: { page: 'learning' } },
  { path: 'learning', component: ContentListComponent, data: { page: 'learning' } },
  { path: 'electronics/:id', component: PageComponent, data: { page: 'electronics' } },
  { path: 'electronics', component: ContentListComponent, data: { page: 'electronics' } },
  { path: 'book/:id', component: PageComponent, data: { page: 'book' } },
  { path: 'book', component: ContentListComponent, data: { page: 'book' } },
  { path: 'web/:id', component: PageComponent, data: { page: 'web' } },
  { path: 'web', component: ContentListComponent, data: { page: 'web' } },
  { path: 'category/:search', component: ContentListComponent, data: { page: 'category' } },
  { path: 'about', component: AboutComponent, data: { page: 'about' } },
  { path: 'contact', component: ContactComponent, data: { page: 'contact' } },
  { path: 'tree', component: ForceDirectedTreeComponent, data: { page: 'tree' } },
  { path: '**', component: ContentListComponent, data: { page: 'architecture'} },
  { path: '', component: ContentListComponent, data: { page: 'architecture' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
