import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-calculadora',
standalone: true,
imports: [FormsModule],
templateUrl: './calculadora.html',
styleUrl: './calculadora.css',
})
export class CalculadoraComponent {

  numero1 = 10;
  numero2 = 20;
  resultado = 30;

  somar() {
    this.resultado = this.numero1 + this.numero2;
  }

  subtrair() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    this.resultado = this.numero1 / this.numero2;
  }
  
  
} 