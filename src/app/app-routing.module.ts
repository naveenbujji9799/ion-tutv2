import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'introduction',
    loadChildren: './introduction/introduction.module#IntroductionPageModule' 
  },
  { path: 'lesson3', loadChildren: './lesson3/lesson3.module#Lesson3PageModule' },
  { path: 'lesson4', loadChildren: './lesson4/lesson4.module#Lesson4PageModule' },
  { path: 'lesson5', loadChildren: './lesson5/lesson5.module#Lesson5PageModule' },
  { path: 'lesson6', loadChildren: './lesson6/lesson6.module#Lesson6PageModule' },
  { path: 'lesson7', loadChildren: './lesson7/lesson7.module#Lesson7PageModule' },
  { path: 'lesson8', loadChildren: './lesson8/lesson8.module#Lesson8PageModule' },
  { path: 'lesson9', loadChildren: './lesson9/lesson9.module#Lesson9PageModule' },
  { path: 'lesson10', loadChildren: './lesson10/lesson10.module#Lesson10PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
