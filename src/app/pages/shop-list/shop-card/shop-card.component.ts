import { Component, OnInit, Input } from '@angular/core';
import { ShopData } from 'src/interfaces/shops.interfaces';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {
  @Input() shopData: ShopData;
  constructor() { }

  ngOnInit(): void {
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
