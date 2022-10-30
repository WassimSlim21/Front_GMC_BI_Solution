import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsOwnersComponent } from './deals-owners.component';

const routes: Routes = [{ path: '', component: DealsOwnersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealsOwnersRoutingModule { }
