import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsOwnersRoutingModule } from './deals-owners-routing.module';
import { DealsOwnersComponent } from './deals-owners.component';


@NgModule({
  declarations: [
    DealsOwnersComponent
  ],
  imports: [
    CommonModule,
    DealsOwnersRoutingModule
  ]
})
export class DealsOwnersModule { }
