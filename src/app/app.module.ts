import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HotelViewComponent,
    SideNavComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
