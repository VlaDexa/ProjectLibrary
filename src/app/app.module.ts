import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ScientificComponent } from './scientific/scientific.component';
import { NewComponent } from './new/new.component';
import { RegularComponent } from './regular/regular.component';
import { TeachComponent } from './teach/teach.component';
import { OrderComponent } from './order/order.component';
import { MailComponent } from './mail/mail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    ScientificComponent,
    NewComponent,
    RegularComponent,
    TeachComponent,
    OrderComponent,
    MailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
