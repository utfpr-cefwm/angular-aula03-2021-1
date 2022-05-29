import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabMenuModule } from 'primeng/tabmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaArtigosComponent } from './components/lista-artigos/lista-artigos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaArtigosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
