import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';

const routes: Routes = [
  { path: 'Connexion', component: PageConnexionComponent },
  { path: 'Dashboard', component: PageDashboardComponent },
  { path: '**', component: PageConnexionComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
