import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-prime-numbers',
  templateUrl: './prime-numbers.component.html',
  styleUrls: ['./prime-numbers.component.css']
})
export class PrimeNumbersComponent implements OnInit {
  primes: number[] = [];
  colorsOfPrimes: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  AfterViewInit(): void {
    this.generatePrimeNumbers();
  }

  isPrime(num: number): boolean {

    if (!Number.isInteger(num)) {
      return false;
    }

    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  generatePrimeNumbers() {

    let currentNumber = this.primes.length == 0 ? 2
      : this.primes[this.primes.length - 1] + 1;


    while (!this.isPrime(currentNumber)) {

      currentNumber++;
    }

    this.primes.push(currentNumber);

    const color = this.getRandomColor();
    this.colorsOfPrimes.push(color);
  }


  getRandomColor(): string {

    const letters = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}

