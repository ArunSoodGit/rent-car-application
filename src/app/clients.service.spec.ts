import { TestBed } from '@angular/core/testing';

import { CustomerService } from './services/customer.service';

describe('ClientsService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
