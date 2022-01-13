import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default/default.component';
import { FavoritesComponent } from './pages/favorites/favorites/favorites.component';
import { MainPageComponent } from './pages/main/main-page/main-page.component';

const routes: Routes = [{
  path:"",
  component:DefaultComponent,
  children:[{
    path:"",
    component: MainPageComponent
  },
{
  path:"favorites",
  component:FavoritesComponent
}
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
