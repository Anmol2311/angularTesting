import { TestBed } from '@angular/core/testing';

import { EmployeeListResolverService } from './employee-list-resolver.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('EmployeeListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
   imports:[HttpClientTestingModule],
    providers:[EmployeeListResolverService]
  }));

  it('should be created', () => {
    const service: EmployeeListResolverService = TestBed.get(EmployeeListResolverService);
    expect(service).toBeTruthy();
  });
});
