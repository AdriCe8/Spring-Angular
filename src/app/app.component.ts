import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products/components/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo';
  enabled: boolean = false;

  courses: string[] = ['Angular','React','Java','PHP']

  setEnabled(): void{
    this.enabled = this.enabled? false:true;
  }
}
