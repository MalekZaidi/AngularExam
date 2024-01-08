import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ShoppingCartComponentComponent } from './shopping-cart-component/shopping-cart-component.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { ModifierProductComponent } from './modifier-product/modifier-product.component'; // Importez HttpClientModule si vous utilisez HttpClient

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponentComponent,
    HomeComponentComponent,
    ShoppingCartComponentComponent,
    DetailsComponent,
    ModifierProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // Ajoutez HttpClientModule ici si vous utilisez HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
