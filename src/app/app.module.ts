import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ScientificComponent } from './scientific/scientific.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    ScientificComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
