import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsExampleComponent } from './components/products-example/products-example.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
