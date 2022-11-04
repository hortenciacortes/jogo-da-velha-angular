import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import {Md5} from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class CaractersService {
  ts: number = Date.now();
  privateKey: string = '0de2b9c61ca2221cdf324afbc0a88281719429bf';
  publicKey: string = 'a61469cf256c0637eafaf182b3ecaa12';
  hash: string = Md5.hashStr(`${this.ts}${this.privateKey}${this.publicKey}`);

  url: string = `http://gateway.marvel.com/v1/public/characters`;
  getCaracters(gamer: string): Observable<any> {
    return this.http.get(this.url, { params: {
      name: gamer,
      ts: this.ts,
      apikey: 'a61469cf256c0637eafaf182b3ecaa12',
      hash: Md5.hashStr(`${this.ts}${this.privateKey}${this.publicKey}`)
    }})
  }

  constructor(private http: HttpClient) { }
}
