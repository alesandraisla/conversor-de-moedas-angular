import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[numero]'
})
export class NumeroDirective {

  constructor() { }

  /**
   * Implementa evento de keyup para o elemento da diretiva.
   * 
   * @param any $event
   */
  @HostListener('keyup', ['$event'])onKeyUp($event: any) {
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if(posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + 
      valor.substr(posDecimais);
    }

    $event.target.value = valor;
  }

}
