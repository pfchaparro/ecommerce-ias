import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { NewProductModule } from './components/products/new-product/new-product.module';
import { ProductComponent } from './components/products/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent,
    ProductComponent,
    ToolbarComponent,
    ContainerAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewProductModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
