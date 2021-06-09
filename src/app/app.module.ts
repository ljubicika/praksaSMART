import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KomponentaComponent } from './komponenta/komponenta.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    KomponentaComponent,
    HeroesComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
