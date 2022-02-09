import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { HomeComponent } from './views/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './views/home/components/top/top.component';
import { FeatureComponent } from './views/home/components/feature/feature.component';
import { AboutusComponent } from './views/home/components/aboutus/aboutus.component';
import { BettingComponent } from './views/betting/betting.component';
import { CardComponent } from './views/Bet/card/card.component';
import { PlaceBetComponent } from './views/Bet/place-bet/place-bet.component';
import { FilterComponent } from './views/Bet/filter/filter.component';
import { RoundsComponent } from './views/rounds/rounds.component';
import { LeaguesComponent } from './views/leagues/leagues.component';
import {FormsModule} from '@angular/forms';
const AppRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    HomeComponent,
    TopComponent,
    FeatureComponent,
    AboutusComponent,
    BettingComponent,
    CardComponent,
    PlaceBetComponent,
    FilterComponent,
    RoundsComponent,
    LeaguesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(AppRoutes),HttpClientModule,FormsModule  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
