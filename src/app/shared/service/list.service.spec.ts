import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[ListService]
  }));

  it('should be created', () => {
    const service: ListService = TestBed.get(ListService);
    expect(service).toBeTruthy();
  });
});
