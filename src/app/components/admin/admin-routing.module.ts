import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('../products/list-products/list-products.module').then(m => m.ListProductsModule)
      },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
