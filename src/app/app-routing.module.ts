import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeCardsComponent } from './components/poke-cards/poke-cards.component';
import { ViewTabsComponent } from './components/view-tabs/view-tabs.component';

const routes: Routes = [
  { path: 'home', component: ViewTabsComponent},
  { path: 'pokeDetail/:id', component:  PokeDetailComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
