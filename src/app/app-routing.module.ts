import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { ShopListComponent } from "./pages/shop-list/shop-list.component";
import { ShopDetailsComponent } from "./pages/shop-details/shop-details.component";

const routes: Routes = [
  { path: "", redirectTo: "shop-list", pathMatch: 'full' },
  { path: "shop-list", component: ShopListComponent },
  {
    path: 'shop-list/:id',
    component: ShopDetailsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: []
})
export class AppRoutingModule {}
