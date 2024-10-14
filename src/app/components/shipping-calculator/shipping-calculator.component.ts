import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping-calculator',
  templateUrl: './shipping-calculator.component.html',
<<<<<<< HEAD
  styleUrls: ['./shipping-calculator.component.css']
})
export class ShippingCalculatorComponent {

=======
  styleUrls: ['./shipping-calculator.component.css'],
})
export class ShippingCalculatorComponent {
  zipCode: string = '';

  onSubmit() {
    if (this.zipCode) {
      // Aqui você processa o CEP (pode ser enviada uma requisição HTTP para sua API Laravel)
      console.log('CEP enviado: ', this.zipCode);
      // Adicionar lógica de cálculo de frete
    }
  }
>>>>>>> 78495cd (Primeiro commit do projeto Footsizer Frontend)
}
