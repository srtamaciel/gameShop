import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ShopDetails } from "src/interfaces/shop-details.interface";
import { GamesNode } from "src/interfaces/shops.interfaces";
import { ShopDataService } from "src/services/shop-data.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { GameModalComponent } from "./game-modal/game-modal.component";

@Component({
  selector: "app-shop-details",
  templateUrl: "./shop-details.component.html",
  styleUrls: ["./shop-details.component.scss"],
})
export class ShopDetailsComponent implements OnInit {
  private shopDataDetailsSubscription: Subscription;
  isCollapsed = true;
  shopId: string;
  shopDetails: ShopDetails;
  gameList: GamesNode[];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private shopDataService: ShopDataService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getShopData();
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
  }

  getShopData() {
    this.shopId = this.route.snapshot.paramMap.get("id");
    this.shopDataService.gameList.subscribe((games) => (this.gameList = games));
    this.shopDataDetailsSubscription = this.shopDataService
      .getShopDetails(this.shopId)
      .subscribe({
        next: (response: ShopDetails) => {
          this.shopDetails = response;
          this.isLoading = false;
        },
        error: (err) => {
          return err;
        },
      });
  }

  openModal(gameId: number) {
    const initialState = {
      id: gameId,
    };
    const modalRef: BsModalRef = this.modalService.show(GameModalComponent, {
      initialState,
      class: "modal-lg",
    });
  }

  ngOnDestroy() {
    if (this.shopDataDetailsSubscription) {
      this.shopDataDetailsSubscription.unsubscribe();
    }
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}
