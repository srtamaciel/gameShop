import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { PagesModule } from "./pages/pages.module";
import { ShopDataService } from "src/services/shop-data.service";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [ShopDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
