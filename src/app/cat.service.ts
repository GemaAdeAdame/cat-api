import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiKey = 'live_kIVleO1PDhh5XOsbHlOrqHnEHq1eVn0ultIFyrJpm5Ggzq15tn6Mpj0fOB7PLi11';
  private apiUrl = 'https://api.thecatapi.com/v1/images/search';

  constructor(private http: HttpClient) { }

  getRandomCat(): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
