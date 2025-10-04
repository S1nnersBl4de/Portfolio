import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Homepage } from './components/homepage/homepage';

const routes: Routes = [{
  path: '',
  component: Layout,
  children: [
    {
      path: '',
      component: Homepage
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
