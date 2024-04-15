import { TestBed, inject } from '@angular/core/testing';
import { MyApiService } from './my-api.service';

describe('MyApiService', () => {
  let service: MyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyApiService]
    });
    service = TestBed.inject(MyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch exchange rates successfully', (done) => {
    service.fetchExchangeRates().then((result) => {
      expect(result).toBeDefined();
      // Add more specific expectations based on the API response
      done();
    }).catch(done.fail);
  });

  it('should handle errors gracefully', (done) => {
    // Mock a failed API request
    spyOn(window, 'fetch').and.returnValue(Promise.reject('Mock Error'));
    
    service.fetchExchangeRates().then((result) => {
      // The promise should not resolve successfully
      done.fail('Expected promise to be rejected, but it was resolved');
    }).catch((error) => {
      expect(error).toBeDefined();
      done();
    });
  });
});
