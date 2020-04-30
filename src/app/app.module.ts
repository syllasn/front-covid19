import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { NgxSpinnerModule } from "ngx-spinner"; 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CovidserviceService } from './covidservice.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 HttpClientModule ,
 FormsModule,
//  NgxSpinnerModule

  ],
  providers: [CovidserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
