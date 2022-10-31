import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AccountsComponent } from "src/app/pages/accounts/accounts.component";
import { PredectionsComponent } from "src/app/pages/predections/predections.component";
import { DealsComponent } from "src/app/pages/deals/deals.component";
import { DealsOwnersComponent } from "src/app/pages/deals-owners/deals-owners.component";
import { ProductsComponent } from "src/app/pages/products/products.component";
import { HackerspacesComponent } from "src/app/pages/hackerspaces/hackerspaces.component";
import { ContactsComponent } from "src/app/pages/contacts/contacts.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    AccountsComponent,
    ContactsComponent,
    HackerspacesComponent,
    ProductsComponent,
    DealsOwnersComponent,
    DealsComponent,
    PredectionsComponent
  ]
})
export class AdminLayoutModule {}
