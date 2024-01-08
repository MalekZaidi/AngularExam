import { Component } from '@angular/core';
import { AddProductService } from '../services/add-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  products: any[] = [];
  cart: any[] = []; 

  constructor(private productService: AddProductService,private router: Router) {} 

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  buyProduct(product: any): void {
    const existingProduct = this.cart.find(p => p.id === product.id);

    if (existingProduct) {
      alert('Product already exist');
    } else {
      this.cart.push(product);
    }
  }


  showDetails(product: any): void {
    this.router.navigate(['/details', product.id], { state: { product } });
  }
  deleteProduct(productId: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          // Rechargez la liste des produits après la suppression
          this.loadProducts();
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }
}
