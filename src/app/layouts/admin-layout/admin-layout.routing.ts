import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { AccountsComponent } from "src/app/pages/accounts/accounts.component";
import { ContactsComponent } from "src/app/pages/contacts/contacts.component";
import { HackerspacesComponent } from "src/app/pages/hackerspaces/hackerspaces.component";
import { ProductsComponent } from "src/app/pages/products/products.component";
import { DealsOwnersComponent } from "src/app/pages/deals-owners/deals-owners.component";
import { DealsComponent } from "src/app/pages/deals/deals.component";
import { PredectionsComponent } from "src/app/pages/predections/predections.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: 'accounts', component:AccountsComponent },
  { path: 'contacts',component:ContactsComponent },
  { path: 'hackerspaces', component:HackerspacesComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'deals_owners', component:DealsOwnersComponent},
  { path: 'deals', component:DealsComponent },
  { path: 'predections', component: PredectionsComponent },

  // { path: "rtl", component: RtlComponent }
];
