import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navigation from "@/elements/Navigation";
import { MenuProvider } from "@/contexts/menuOpenContext";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <MenuProvider>
        <Navigation />
        <Outlet />
      </MenuProvider>
    </React.Fragment>
  );
}
