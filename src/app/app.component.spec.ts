import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { IndexModule } from './index/index.module';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IndexModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent); // create instance
    component = fixture.componentInstance; // to access property & method of components  
    el = fixture.debugElement; // to access html element
  })

  it(`should have as title 'angularApp'`, () => {

    expect(el.nativeElement.querySelector('app-header').textContent).toContain('Angular Demo Application');

  });

  it("compute function should return a correct addition", () => {

    expect(component.compute(4, 5)).toBe(9);

  })

});
