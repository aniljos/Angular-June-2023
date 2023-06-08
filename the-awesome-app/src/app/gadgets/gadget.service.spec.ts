import { TestBed } from '@angular/core/testing';

import { GadgetService } from './gadget.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../model/Product';

fdescribe('GadgetService', () => {
  let service: GadgetService;
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: GadgetService, useClass: GadgetService}],
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(GadgetService);
     
  });



  it('should be created', (done) => {
    expect(service).toBeTruthy();

    const mock = TestBed.inject(HttpTestingController);
    service.fetchProducts()
              .subscribe((data) => {

                  expect(data.length).toBe(4);
                  done();

              });

    mock.expectOne(environment.productsUrl).flush([
      new Product(), new Product(), new Product(), new Product(),
    ]);
    
  });
});
