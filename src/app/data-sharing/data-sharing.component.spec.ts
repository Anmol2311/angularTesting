import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingComponent } from './data-sharing.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('DataSharingComponent', () => {
  let component: DataSharingComponent;
  let fixture: ComponentFixture<DataSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,RouterTestingModule],
      declarations: [ DataSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
