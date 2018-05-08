import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleNewComponent } from './article-new/article-new.component';
import { ManagerArticlesComponent } from './manager-articles/manager-articles.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register';
import { HomeComponent } from './home/home.component';
import { RouteComponent } from './shared/router.component';
import { AuthGuard } from './_guards';

let routes: Routes = [
    { path: '', component: HomeComponent},
    {
      path:'list',
      component:RouteComponent,
      canActivate:[AuthGuard],
      children:[
        { path: '', component: ManagerArticlesComponent},
        { path: 'new-article', component: ArticleNewComponent},
      ]
    },
    { path: 'about', loadChildren:'app/about/about.module#AboutModule'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:false})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
