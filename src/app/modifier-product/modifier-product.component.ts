import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductService } from '../services/add-product.service';

@Component({
  selector: 'app-modifier-product',
  templateUrl: './modifier-product.component.html',
  styleUrls: ['./modifier-product.component.css']
})
export class ModifierProductComponent implements OnInit {
  productId: number | undefined;
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: AddProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // Récupérer l'ID du produit depuis l'URL
      this.loadProductDetails(this.productId);
    });
  }

  loadProductDetails(productId: number): void {
    this.productService.getProductById(productId).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }

  updateProduct(): void {
    if (this.productId !== undefined) {
      this.productService.updateProduct(this.productId, this.product).subscribe(
        (data) => {
          console.log('Product updated successfully:', data);
          // Redirection vers la page de détails après la mise à jour
          this.router.navigate(['/details', this.productId], { state: { product: this.product } });
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } else {
      console.error('Product ID is undefined');
    }
  }
}
