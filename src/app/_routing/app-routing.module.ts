import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { NotFoundComponent } from '../_components/not-found/not-found.component';
import { HomeComponent } from '../_components/home/home.component';

// service
import { PathResolveService } from '../_services/pathResolve.service';

// models
import { paths } from '../_models/paths.model';

// app routing
const routes: Routes = [
  {
    path: paths.home,
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: paths.home,
    pathMatch: 'full'
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
