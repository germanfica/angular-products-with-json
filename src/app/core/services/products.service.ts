import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/product';
import { map, Observable, } from 'rxjs';

const API_URL: string = `./assets/json/products.json`;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  /**
   * Lista todos los productos.
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}`);
  }

  /**
   * Busca un producto según su id.
   * @param id Identificador del producto a buscar.
   */
  getProduct(id: number): Observable<Product> {
    return this.getAllProducts().pipe<Product>(map((products: Product[]) => this.findProductById(id, products)));
  }

  /**
   * Busca un producto en una lista de productos.
   * 
   * @param id identificador del producto.
   * @param products la lsita de productos.
   * @returns 
   */
  private findProductById(id: number, products: Product[]): Product {
    let i: number = products.length - 1;
    let exit: boolean = false;
    let element: Product;
    let aux: Product = { id: -1 } as Product; // elemento vacio por defecto

    while (i >= 0 && !exit) {
      element = products[i];
      if (element.id === id) {
        console.log("Encontrado.");
        aux = products[i];
        exit = true;
      }
      i--;
    }
    return aux;
  }
}