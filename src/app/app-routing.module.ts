import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScientificComponent } from './scientific/scientific.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NewComponent } from './new/new.component';
import { OrderComponent } from './order/order.component';
import { TeachComponent } from './teach/teach.component';
import { RegularComponent } from './regular/regular.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'scientific', component: ScientificComponent},
  { path: 'login', component: LoginComponent, outlet: 'log'},
  { path: 'mail', component: MailComponent},
  { path: 'new', component: NewComponent},
  { path: 'order', component: OrderComponent},
  { path: 'teach', component: TeachComponent},
  { path: 'regular', component: RegularComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
