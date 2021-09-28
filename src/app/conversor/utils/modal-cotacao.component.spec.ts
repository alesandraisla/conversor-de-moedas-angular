import { ConversorService } from './../services/conversor.service';
import { DataBrPipe } from './../pipes/data-br.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCotacaoComponent } from './modal-cotacao.component';
import { HttpClientModule } from '@angular/common/http';

describe('ModalCotacaoComponent', () => {
  let component: ModalCotacaoComponent;
  let fixture: ComponentFixture<ModalCotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCotacaoComponent, DataBrPipe ],
      providers: [ ConversorService],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
