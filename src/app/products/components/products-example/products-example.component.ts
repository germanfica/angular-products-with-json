import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-products-example',
  template: `
  <!-- Products -->
  <h1>Products:</h1>  
  <pre>{{ products | json }}</pre>
  <!-- Product -->
  <h1>Product:</h1>
  <pre>{{ product | json }}</pre>
  `,
  styles: [
  ]
})
export class ProductsExampleComponent implements OnInit {
  products: Product[] = [] as Product[];
  product: Product = {} as Product;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
    this.fetchProduct(3);
  }

  private fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  private fetchProduct(id: number) {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }
}
