import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezaComponent } from './cabeza.component';
import { LogoComponent } from '../logo/logo.component';

describe('CabezaComponent', () => {
  let component: CabezaComponent;
  let fixture: ComponentFixture<CabezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CabezaComponent,
        LogoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
