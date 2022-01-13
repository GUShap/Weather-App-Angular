import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { HeaderComponent } from './cmps/header/header/header.component';
import { FooterComponent } from './cmps/footer/footer/footer.component';
import { SidebarComponent } from './cmps/sidebar/sidebar/sidebar.component';
import { CardComponent } from './widgets/card/card.component';
import { CitySearchComponent } from './cmps/search/city-search/city-search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    CitySearchComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    CitySearchComponent
  ]
})
export class SharedModule { }
