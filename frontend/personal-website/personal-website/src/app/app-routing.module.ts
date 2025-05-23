import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SiteInfoComponent } from './components/site-info/site-info.component';
import { BlackJackHelpComponent } from './components/black-jack-help/black-jack-help.component';
import { BlackJackGameComponent } from './components/black-jack-game/black-jack-game.component';

const routes: Routes = [
  {path:'black-jack-game', component:BlackJackGameComponent},
  {path:'black-jack-help', component:BlackJackHelpComponent},
  {path:'site-info', component:SiteInfoComponent},
  {path:'landing', component: LandingComponent},
  {path:'**', redirectTo:'/landing', pathMatch: 'full'},
  {path:'', redirectTo:'/landing', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
