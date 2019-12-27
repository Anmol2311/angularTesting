import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUtdComponent } from './register-utd.component';
import { FormsModule } from '@angular/forms';

describe('RegisterUtdComponent', () => {
  let component: RegisterUtdComponent;
  let fixture: ComponentFixture<RegisterUtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ RegisterUtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
