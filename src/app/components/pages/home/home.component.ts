import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../products/product.service';
import { ProductI } from '../../../shared/models/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data: ProductI[]) => {
      this.products = data;
      this.products = this.products.products;
    })
  }

}
