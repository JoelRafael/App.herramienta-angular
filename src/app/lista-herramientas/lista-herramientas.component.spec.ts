import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHerramientasComponent } from './lista-herramientas.component';

describe('ListaHerramientasComponent', () => {
  let component: ListaHerramientasComponent;
  let fixture: ComponentFixture<ListaHerramientasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHerramientasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
