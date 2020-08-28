import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductI } from '../../../shared/models/product.interface';
import { ProductService } from '../../products/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product: any;


  constructor(private route: ActivatedRoute, private location: Location, private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.productService.getProduct(id).subscribe((data: ProductI[]) => {
    this.product = data;
    this.product = this.product.product;
    })
  }

  returnPage() {
    this.location.back();
  }
}
