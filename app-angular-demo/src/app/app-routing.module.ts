import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerArticlesComponent } from './manager-articles/manager-articles.component';

let routes: Routes = [
    { path: '', component: ManagerArticlesComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:false})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }