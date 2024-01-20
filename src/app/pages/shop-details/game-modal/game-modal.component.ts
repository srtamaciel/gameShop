import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Subscription } from "rxjs";
import { GameData } from "src/interfaces/game-details.interfaz";
import { ShopDataService } from "src/services/shop-data.service";

@Component({
  selector: "app-game-modal",
  templateUrl: "./game-modal.component.html",
  styleUrls: ["./game-modal.component.scss"],
})
export class GameModalComponent implements OnInit {
  private gameDetailsSubscription: Subscription;

  id: number;
  gameData: GameData;
  gameImages: string[] = [];
  isLoading = true;

  constructor(
    public modalRef: BsModalRef,
    private shopDataService: ShopDataService
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.getGameData(this.id);
    }
  }

  getGameData(gameId: number) {
    this.gameDetailsSubscription = this.shopDataService
      .getGameDetails(this.id)
      .subscribe({
        next: (response: GameData) => {
          this.isLoading = false;
          this.gameData = response;
          if (response.background_image)
            this.gameImages.push(response.background_image);
          if (response.background_image_additional)
            this.gameImages.push(response.background_image_additional);
        },
        error: (err) => {
          return err
        },
      });
  }

  closeModal() {
    this.modalRef.hide();
  }

  ngOnDestroy() {
    if (this.gameDetailsSubscription) {
      this.gameDetailsSubscription.unsubscribe();
    }
  }
}
