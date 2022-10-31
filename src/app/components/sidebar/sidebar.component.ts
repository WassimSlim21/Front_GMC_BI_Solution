import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/accounts",
    title: "Users",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/hackerspaces",
    title: "Hackerspaces",
    icon: "icon-square-pin",
    class: ""
  },
  {
    path: "/products",
    title: "Products",
    icon: "icon-molecule-40",
    class: ""
  },
  {
    path: "/deals",
    title: "Deals",
    icon: "icon-coins",
    class: ""
  },
  {
    path: "/deals_owners",
    title: "Deals owners",
    icon: "icon-tag",
    class: ""
  },
  {
    path: "/predections",
    title: "Predection",
    icon: "icon-app",
    class: ""
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "icon-components",
    class: ""
  },
  {
    path: "/icons",
    title: "Icons",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/maps",
    title: "Maps",
    icon: "icon-pin",
    class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/user",
    title: "User Profile",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    icon: "icon-world",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
