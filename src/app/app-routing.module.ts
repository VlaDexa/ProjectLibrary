import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScientificComponent } from './scientific/scientific.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'scientific', component: ScientificComponent},
  { path: 'login', component: LoginComponent, outlet: 'log'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
