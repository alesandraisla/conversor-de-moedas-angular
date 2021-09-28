import { ConversorService } from './../services';
import { MoedaService } from './../services';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Conversao, ConversaoResponse, Moeda } from '../models';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;


  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) { }

  ngOnInit() {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   * 
   * @return void
   */
  init(): void {
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversao dos valores.
   * 
   * @return void
   */
  converter(): void {
    if(this.conversaoForm.form.valid) {
      // alert('Convertendo: ' + JSON.stringify(this.conversao))
      this.conversorService
        .converter(this.conversao)
        .subscribe(
          response => this.conversaoResponse = response, 
          error => this.possuiErro = true
        );
    }
  }

}
