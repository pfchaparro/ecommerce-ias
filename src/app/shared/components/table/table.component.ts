import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../../components/products/product.service';
import { ProductI } from '../../models/product.interface';

//import Swal from 'sweetalert2';

import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nameProduct', 'priceProduct', 'actions'];
  dataSource = new MatTableDataSource();
  products: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private productService: ProductService, public dialog: MatDialog) { }

  ngOnInit() {
    this.productService.getAllProduct().subscribe((data: ProductI[]) => {
      console.log(data);
      this.products = data;
      this.dataSource.data = this.products.products;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditProduct(product: ProductI) {
    console.log('Edit product', product);
    this.openDialog(product);
  }
  /*
    onDeletePost(post: ProductI) {
      Swal.fire({
        title: 'Are you sure?',
        text: `You won't be able to revert this!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.value) {
          this.postSvc.deletePostById(post).then(() => {
            Swal.fire('Deleted!', 'Your  post has been deleted.', 'success');
          }).catch((error) => {
            Swal.fire('Error!', 'There was an error deleting this post', 'error');
          });
        }
      });
  
    }
  */
  onNewProduct() {
    this.openDialog();
  }

  openDialog(product?: ProductI): void {
    const config = {
      data: {
        message: product ? 'Edit Product' : 'New Product',
        content: product
      }
    };

    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }
}