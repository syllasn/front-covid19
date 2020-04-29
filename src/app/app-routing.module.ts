import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
 // { path: '', component: MenuComponent },
  { path: 'data', component: BodyComponent},
  { path: 'some/',   redirectTo: '/data', pathMatch: 'full' },
  { path: '',   redirectTo: '/data', pathMatch: 'full' }, // redirect to `first-component`

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
