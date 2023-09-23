import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GameHolderComponent } from './components/game-holder/game-holder.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { GameSearchbarComponent } from './components/game-searchbar/game-searchbar.component';
import { StoreTitelComponent } from './components/store-titel/store-titel.component';
import { RecommendGamesComponent } from './components/recommend-games/recommend-games.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Routes/home/home.component';
import { AboutComponent } from './Routes/about/about.component';
import { GameIdComponent } from './Routes/game-id/game-id.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameHolderComponent,
    GameItemComponent,
    GameSearchbarComponent,
    StoreTitelComponent,
    RecommendGamesComponent,
    SearchResultsComponent,
    HomeComponent,
    AboutComponent,
    GameIdComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
