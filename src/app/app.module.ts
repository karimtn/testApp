import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { ExploreComponent } from './home/explore/explore.component';
import { CapitalComponent } from './home/capital/capital.component';
import { FooterComponent } from './home/footer/footer.component';
import { WorkComponent } from './home/work/work.component';
import { StoreComponent } from './home/store/store.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExploreComponent,
    CapitalComponent,
    FooterComponent,
    WorkComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
