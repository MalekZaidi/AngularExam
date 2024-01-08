import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ShoppingCartComponentComponent } from './shopping-cart-component/shopping-cart-component.component';
import { DetailsComponent } from './details/details.component';
import { ModifierProductComponent } from './modifier-product/modifier-product.component';

const routes: Routes = [
  { path: 'add', component: AddProductComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'shopping-cart', component: ShoppingCartComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent }, // Ajoutez cette route pour DetailsComponent
  {path:'modify/:id',component:ModifierProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
