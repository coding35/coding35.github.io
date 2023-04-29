import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/components/about/about.component';
import { ContactComponent } from './main/components/contact/contact.component';
import { ContentListComponent } from './main/components/content-list/content-list.component';
import { ForceDirectedTreeComponent } from './main/components/force-directed-tree/force-directed-tree.component';
import { PageComponent } from './main/components/page/page.component';
import { Sm2Component } from './sm2/sm2.component';
import { IdbStorageAccessService } from './shared/service/idb-storage-access.service';


const routes: Routes = [
  { path: 'sm2', component: Sm2Component, data: { page: 'SM2' } },
  { path: 'architecture/:id', component: PageComponent, data: { page: 'architecture' } },
  { path: 'architecture', component: ContentListComponent, data: { page: 'architecture' } },
  { path: 'design/:id', component: PageComponent, data: { page: 'design' } },
  { path: 'design', component: ContentListComponent, data: { page: 'design' } },
  { path: 'code/:id', component: PageComponent, data: { page: 'code' } },
  { path: 'code', component: ContentListComponent, data: { page: 'code' } },
  { path: 'database/:id', component: PageComponent, data: { page: 'database' } },
  { path: 'database', component: ContentListComponent, data: { page: 'database' } },
  { path: 'video/:id', component: PageComponent, data: { page: 'video' } },
  { path: 'video', component: ContentListComponent, data: { page: 'video' } },
  { path: 'assembly/:id', component: PageComponent, data: { page: 'assembly' } },
  { path: 'assembly', component: ContentListComponent, data: { page: 'assembly' } },
  { path: 'productivity/:id', component: PageComponent, data: { page: 'productivity' } },
  { path: 'productivity', component: ContentListComponent, data: { page: 'productivity' } },
  { path: 'learning/:id', component: PageComponent, data: { page: 'learning' } },
  { path: 'learning', component: ContentListComponent, data: { page: 'learning' } },
  { path: 'linux/:id', component: PageComponent, data: { page: 'linux' } },
  { path: 'linux', component: ContentListComponent, data: { page: 'linux' } },
  { path: 'soft-skills/:id', component: PageComponent, data: { page: 'soft-skills' } },
  { path: 'soft-skills', component: ContentListComponent, data: { page: 'soft-skills' } },
  { path: 'machine-learning/:id', component: PageComponent, data: { page: 'machine-learning' } },
  { path: 'machine-learning', component: ContentListComponent, data: { page: 'machine-learning' } },
  { path: 'electronics/:id', component: PageComponent, data: { page: 'electronics' } },
  { path: 'electronics', component: ContentListComponent, data: { page: 'electronics' } },
  { path: 'book/:id', component: PageComponent, data: { page: 'book' } },
  { path: 'book', component: ContentListComponent, data: { page: 'book' } },
  { path: 'development/:id', component: PageComponent, data: { page: 'development' } },
  { path: 'development', component: ContentListComponent, data: { page: 'development' } },
  { path: 'windows/:id', component: PageComponent, data: { page: 'windows' } },
  { path: 'windows', component: ContentListComponent, data: { page: 'windows' } },
  { path: 'web/:id', component: PageComponent, data: { page: 'web' } },
  { path: 'web', component: ContentListComponent, data: { page: 'web' } },
  { path: 'SOLID/:id', component: PageComponent, data: { page: 'SOLID' } },
  { path: 'SOLID', component: ContentListComponent, data: { page: 'SOLID' } },
  { path: 'category/:search', component: ContentListComponent, data: { page: 'category' } },
  { path: 'about', component: AboutComponent, data: { page: 'about' } },
  { path: 'contact', component: ContactComponent, data: { page: 'contact' } },
  { path: 'tree', component: ForceDirectedTreeComponent, data: { page: 'tree' } },
  { path: '**', component: ContentListComponent, data: { page: 'list'} },
  { path: '', component: ContentListComponent, data: { page: 'list' } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
