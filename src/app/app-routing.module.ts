import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberComponent } from './components/number/number.component';

const routes: Routes = [
  { path:'',redirectTo:'/number',pathMatch:'full'},
  { path:'number',component: NumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
