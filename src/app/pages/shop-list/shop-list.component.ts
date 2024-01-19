import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopResponse } from 'src/interfaces/shops.interfaces';
import { ShopDataService } from 'src/services/shop-data.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  private shopDataSubscription: Subscription;
  shopData: ShopResponse;
  isCollapsed = true;
    isLoading = true;

  constructor(private shopDataService: ShopDataService) {}

  ngOnInit() {
    this.loadShopData();
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }

  loadShopData(){
    this.shopDataSubscription = this.shopDataService.getShopList().subscribe({
      next: (response: ShopResponse) => {
        this.isLoading = false;
          this.shopData = response;
      },
      error: (err) => {
        console.log(err)

      }
    })
  }

  ngOnDestroy() {
      if (this.shopDataSubscription) {
        this.shopDataSubscription.unsubscribe();
      }
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }

}
