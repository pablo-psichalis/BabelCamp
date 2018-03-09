import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosMocComponent } from './libros-moc.component';

describe('LibrosMocComponent', () => {
  let component: LibrosMocComponent;
  let fixture: ComponentFixture<LibrosMocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosMocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosMocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
