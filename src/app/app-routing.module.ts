import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabAComponent } from './tab-a/tab-a.component'; // Assicurati che il percorso sia corretto
import { TabBComponent } from './tab-b/tab-b.component'; 
const routes: Routes = [
  { path: 'tab-a', component: TabAComponent },  // Route per TabA
  { path: '', redirectTo: '/tab-a', pathMatch: 'full' }, // Redirect di default a TabA
  { path: 'tab-b', component: TabBComponent },  // Route per TabB
  { path: '', redirectTo: '/tab-b', pathMatch: 'full' } // Redirect di default a TabB
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
