import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalCotacaoComponent } from './../utils/modal-cotacao.component';
import { DataBrPipe } from './../pipes/data-br.pipe';
import { MoedaService, ConversorService } from './../services';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorComponent } from './conversor.component';
import { NumeroDirective } from '..';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ConversorComponent,
        NumeroDirective,
        DataBrPipe,
        ModalCotacaoComponent
      ],
      providers: [ MoedaService, ConversorService ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
