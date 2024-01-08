import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddProductService } from '../services/add-product.service';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css']
})
export class AddProductComponentComponent {
  productAdded: boolean = false;

  constructor(private productService: AddProductService) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const productName = form.value.productName;
      const productDescription = form.value.productDescription;
      const productPrice = form.value.productPrice;

      const newProduct = {
        name: productName,
        description: productDescription,
        price: productPrice
      };

      this.productService.addProduct(newProduct).subscribe(
        (response) => {
          console.log('Product added successfully:', response);
          form.reset();
          this.productAdded = true;

          setTimeout(() => {
            this.productAdded = false;
          }, 3000);
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    } else {
      // Handle additional errors or validations if needed
    }
  }
}
