import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './client/routing/routing.module';
import { AdminModule } from './admin/routing/admin/admin.module';
import { GuesModule } from './gues/routing/gues.module';
import { FilterPipe } from './shared/filter.pipe';
import { ProfileComponent } from './client/pages/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    HttpClientModule,
    AdminModule,
    GuesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
