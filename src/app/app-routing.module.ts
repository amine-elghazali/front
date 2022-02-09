import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BettingComponent } from './views/betting/betting.component';
import { CardComponent } from './views/Bet/card/card.component';
import { HomeComponent } from './views/home/home.component';
import { FilterComponent } from './views/Bet/filter/filter.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  //paths
  {path:'home',component:HomeComponent},
  {path:'betting',component:BettingComponent},
  {path:'card',component:CardComponent},
  {path:'filter',component:FilterComponent},
  {path:'aboutus',component:AboutusComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
