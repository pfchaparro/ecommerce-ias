import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/products/product/product.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';

const routes: Routes = [
  {
    path: '', component: ContainerAppComponent,
    children: [
      {
        path: 'home', loadChildren: () =>
          import('./components/pages/home/home.module').then(m => m.HomeModule)
      },
      { path: 'product/:id', component: ProductComponent },
      { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
