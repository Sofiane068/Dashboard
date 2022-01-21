import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { FormComponent } from './pages/page-connexion/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageConnexionComponent,
    PageDashboardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
