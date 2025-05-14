import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcaoCadastroComponent } from './opcao-cadastro.component';

describe('OpcaoCadastroComponent', () => {
  let component: OpcaoCadastroComponent;
  let fixture: ComponentFixture<OpcaoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcaoCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
