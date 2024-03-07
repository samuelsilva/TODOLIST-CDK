import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterLink } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// This is a very important module, with this navigation start to appear in browser
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



import { ListDragDropComponent } from './components/list-drag-drop/list-drag-drop.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,    
  ],
  imports: [
    BrowserModule,
    RouterModule, 
    RouterLink,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    ListDragDropComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
