import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFormComponent } from './angular-form.component';
import { DebugElement } from '@angular/core';

describe('AngularFormComponent', () => {
  let component: AngularFormComponent;
  let fixture: ComponentFixture<AngularFormComponent>;
  let el:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ AngularFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(el.nativeElement.nav).not.toBeTruthy();
  });
});
