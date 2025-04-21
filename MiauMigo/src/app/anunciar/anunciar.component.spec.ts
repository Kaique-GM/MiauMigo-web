import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciarComponent } from './anunciar.component';

describe('AnunciarComponent', () => {
  let component: AnunciarComponent;
  let fixture: ComponentFixture<AnunciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnunciarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnunciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
