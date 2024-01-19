import { Component, OnInit } from '@angular/core';
import { ShopResponse } from 'src/interfaces/shops.interfaces';
import { ShopDataService } from 'src/services/shop-data.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  shopData: ShopResponse;
  isCollapsed = true;
  constructor(private shopDataService: ShopDataService) {}

  ngOnInit() {
    this.loadShopData();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }

  loadShopData(){
    this.shopDataService.getShopList().subscribe({
      next: (response: ShopResponse) => {
          console.log(response);
          this.shopData = response;
      },
      error: (err) => {
        console.log(err)

      }
    })
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }

}
