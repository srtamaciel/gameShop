import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopResponse } from '../interfaces/shops.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopDataService {
  private apiUrl = 'https://rawg-video-games-database.p.rapidapi.com/stores?key=c13d9de91ed24b13abd23ec72a84ddbe';

  constructor(private http: HttpClient) {}

  getShopList(): Observable<ShopResponse> {
    return this.http.get<ShopResponse>(this.apiUrl, {
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0"
      }
    });
  }
}
