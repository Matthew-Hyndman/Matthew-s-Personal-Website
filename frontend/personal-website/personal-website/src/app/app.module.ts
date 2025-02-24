import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SiteInfoComponent } from './components/site-info/site-info.component';
import { BlackJackHelpComponent } from './components/black-jack-help/black-jack-help.component';
import { BlackJackGameComponent } from './components/black-jack-game/black-jack-game.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NoDoubleClickDirective } from './directives/no-double-click.directive';
import { MiniNavMenuComponent } from './components/mini-nav-menu/mini-nav-menu.component';
import { NavLinks } from './common/nav-links';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SiteInfoComponent,
    BlackJackHelpComponent,
    BlackJackGameComponent,
    NoDoubleClickDirective,
    MiniNavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
