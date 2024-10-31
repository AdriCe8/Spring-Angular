import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  onClean() {
    this.product = new Product();
}

  @Input() product: Product = {
    id:0,
    name:'',
    description:'',
    price:0
  };

  @Output() newProductEvent = new EventEmitter();


  onSubmit(): void {
    this.newProductEvent.emit(this.product);
    console.log(this.product);

  }

}
