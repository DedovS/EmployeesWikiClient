import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WikiComponent } from './wiki/wiki.component';


const routes: Routes = [
  { path: 'wiki', component: WikiComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
