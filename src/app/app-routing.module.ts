import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path:"",redirectTo:"home",pathMatch:"full"
  // },
  // {
  //   path: 'task2',
  //   loadChildren: () => import('./@module/task2/task2.module').then(m => m.Task2Module)
  // }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
