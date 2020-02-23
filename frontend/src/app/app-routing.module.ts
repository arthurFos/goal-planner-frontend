import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'category', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)},
  {path: 'goal', loadChildren: () => import('./modules/goal/goal.module').then(m => m.GoalModule)},
  {path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
