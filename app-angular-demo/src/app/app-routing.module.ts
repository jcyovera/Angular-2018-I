import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleNewComponent } from './article-new/article-new.component';
import { ManagerArticlesComponent } from './manager-articles/manager-articles.component';

let routes: Routes = [
    { path: '', component: ManagerArticlesComponent},
    { path: 'new-article', component: ArticleNewComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:false})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
