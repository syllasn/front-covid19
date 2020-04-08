import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
 // { path: '', component: MenuComponent },
  { path: '', component: BodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
