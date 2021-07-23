import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule)
  },
  {
    path: '', redirectTo: '/users', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true,
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
