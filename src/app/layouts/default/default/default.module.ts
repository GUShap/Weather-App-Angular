import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';





import { MainPageComponent } from 'src/app/pages/main/main-page/main-page.component';
import { DefaultComponent } from './default.component';
import { FavoritesComponent } from 'src/app/pages/favorites/favorites/favorites.component';





@NgModule({
  declarations: [
    DefaultComponent,
    MainPageComponent,
    FavoritesComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})

export class DefaultModule { }
