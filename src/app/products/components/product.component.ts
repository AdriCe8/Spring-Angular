import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((product) => {
      this.products = product;
    });
  }

  addProduct(product: Product) {
    if (product.id > 0) {
      this.service.update(product).subscribe((productUpdate) => {
        this.products = this.products.map((prod) => {
          if (prod.id == product.id) {
            return { ...productUpdate };
          }
          return prod;
        });
      });
    } else {
      this.service.create(product).subscribe((productNew) => {
        this.products = [...this.products, { ...productNew }];
      });
    }

    this.productSelected = new Product();
  }

  productSelected: Product = new Product();

  onEditSelect(product: Product) {
    this.productSelected = { ...product };
  }

  onDelete(id: number): void {
    this.service.remove(id).subscribe(()=>{
      this.products = this.products.filter((product) => product.id !== id);

    })
  }
}
