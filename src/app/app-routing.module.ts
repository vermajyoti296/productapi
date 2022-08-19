import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetdelComponent } from './getdel/getdel.component';
import { PostComponent } from './post/post.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    component:GetdelComponent,
    path:'getdel'
  },
  {
    component:PostComponent,
    path:'post'
  },
  {
    component:UpdateComponent,
    path:'update/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
