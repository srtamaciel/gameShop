import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopResponse } from '../interfaces/shops.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShopDetails } from 'src/interfaces/shop-details.interface';
import { GameData } from 'src/interfaces/game-details.interfaz';

@Injectable({
  providedIn: 'root'
})
export class ShopDataService {
  private apiUrl = 'https://rawg-video-games-database.p.rapidapi.com/stores?key=c13d9de91ed24b13abd23ec72a84ddbe';
  private host = "rawg-video-games-database.p.rapidapi.com";
  private apikey = "45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0";

  constructor(private http: HttpClient) {}
  gameList = new BehaviorSubject(null);

  getShopList(): Observable<ShopResponse> {
    return this.http.get<ShopResponse>(this.apiUrl, {
      headers: {
        "x-rapidapi-host": this.host,
        "x-rapidapi-key": this.apikey 
      }
    });
  }

  getShopDetails(id: string): Observable<ShopDetails> {
    return this.http.get<ShopDetails>(`https://rawg-video-games-database.p.rapidapi.com/stores/${id}?key=c13d9de91ed24b13abd23ec72a84ddbe`, {
      headers: {
        "x-rapidapi-host": this.host,
        "x-rapidapi-key": this.apikey 
      }
    });
  }

  getGameDetails(id: number): Observable<GameData> {
    return this.http.get<GameData>(`https://rawg-video-games-database.p.rapidapi.com/games/${id}?key=c13d9de91ed24b13abd23ec72a84ddbe`, {
      headers: {
        "x-rapidapi-host": this.host,
        "x-rapidapi-key": this.apikey 
      }
    });
  }
}
