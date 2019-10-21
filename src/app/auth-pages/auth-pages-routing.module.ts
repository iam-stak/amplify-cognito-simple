import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPagesComponent } from './auth-pages.component';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';

const routes: Routes = [
  { path: '', component: AuthPagesComponent },
  { path: 'example-a', component: ExampleAComponent },
  { path: 'example-b', component: ExampleBComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPagesRoutingModule { }
