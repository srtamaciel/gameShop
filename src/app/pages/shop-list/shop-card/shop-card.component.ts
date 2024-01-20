import { Component, OnInit, Input } from "@angular/core";
import { GamesNode, ShopData } from "src/interfaces/shops.interfaces";
import { ShopDataService } from "src/services/shop-data.service";

@Component({
  selector: "app-shop-card",
  templateUrl: "./shop-card.component.html",
  styleUrls: ["./shop-card.component.scss"],
})
export class ShopCardComponent implements OnInit {
  @Input() shopData: ShopData;

  constructor(private shopDataService: ShopDataService) {}

  ngOnInit(): void {}
  getGames(gameList: GamesNode[]) {
    this.shopDataService.gameList.next(gameList);
  }
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
