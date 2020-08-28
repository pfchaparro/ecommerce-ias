import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductsRoutingModule } from './list-products-routing.module';
import { ListProductsComponent } from './list-products.component';
import { MaterialModule } from '../../../material.module';
import { TableComponent } from '../../../shared/components/table/table.component';

@NgModule({
  declarations: [ListProductsComponent, TableComponent],
  imports: [
    CommonModule,
    ListProductsRoutingModule,
    MaterialModule
  ]
})
export class ListProductsModule { }
