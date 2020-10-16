import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  // API_URL = 'http://apiform.test/';
  API_URL = 'http://api.pormibahia.org/';
  
  constructor() { }
}
