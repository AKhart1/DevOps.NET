import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumbersComponent } from './prime-numbers.component';

describe('PrimeNumbersComponent', () => {
  let component: PrimeNumbersComponent;
  let fixture: ComponentFixture<PrimeNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should return true for prime numbers", () => {
    const primes = [2, 3, 5, 7, 11, 13];
    primes.forEach(number => {
      const isPrime = component.isPrime(number);
      expect(isPrime).toBeTrue();
    })
  });

  it('should return false for non-prime numbers', () => {
    const nonPrimes = [0, 1, 4, 6, 8, 10, 12];
    nonPrimes.forEach(number => {
      const isPrime = component.isPrime(number);
      expect(isPrime).toBeFalse();
    });
  });


  it('should return false for negative numbers', () => {
    const negativeNumbers = [-2, -7, -10];
    negativeNumbers.forEach(number => {
      const isPrime = component.isPrime(number);
      expect(isPrime).toBeFalse();
    });
  });

  it('should return false for non-integer numbers', () => {
    const nonIntNumbers = [1.23,2.68, 3.14];
    nonIntNumbers.forEach(number => {
      const isPrime = component.isPrime(number);
      expect(isPrime).toBeFalse();
    });
  });

  it('should return false for 0 and 1', () => {
    const numbers = [0, 1];
    numbers.forEach(number => {
      const isPrime = component.isPrime(number);
      expect(isPrime).toBeFalse();
    });
  });

  it('should return true for large prime numbers', () => {
    const largePrimes = [997, 104729, 15485863];
    largePrimes.forEach(number => {
      const isPrime = component.isPrime(number);
      expect(isPrime).toBeTrue();
    });
  });

  it('should return false for large non-prime numbers', () => {
    const largeNonPrimes = [1000, 10000, 100000];
    largeNonPrimes.forEach(number => {
      const isPrime = component.isPrime(number);
      expect(isPrime).toBeFalse();
    });
  });

});
