import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { FormThemeProvider } from "@react-md/form";
import routes from "application/routes";
import { QueryClientProvider, QueryClient } from "react-query";

import { Configuration } from "@react-md/layout";
import { AppLayout, Loader } from "application/components";
import { ROUTER_PATH_LIST } from "application/constants";
import { NotificationProvider } from "application/contexts";
import "App.scss";
const queryClient = new QueryClient();

const menu = [
  {
    title: "Home",
    path: ROUTER_PATH_LIST.default,
  },
  {
    title: "Products",
    path: ROUTER_PATH_LIST.product,
  },
  {
    title: "Clients",
    path: ROUTER_PATH_LIST.client,
  },
  {
    title: "Contact",
    path: ROUTER_PATH_LIST.contact,
  },
];
function App() {
  return (
    <Configuration>
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <FormThemeProvider theme="underline">
            <Router basename="/">
              <AppLayout menu={menu}>
                <Suspense fallback={<Loader />}>
                  <Switch>
                    {routes.map(({ component: Component, ...rest }) => (
                      <Route
                        {...rest}
                        key={rest.path}
                        render={(props: any) => <Component {...props} />}
                        exact
                      />
                    ))}
                    <Redirect from="*" to={ROUTER_PATH_LIST.default} />
                  </Switch>
                </Suspense>
              </AppLayout>
            </Router>
          </FormThemeProvider>
        </NotificationProvider>
      </QueryClientProvider>
    </Configuration>
  );
}

export default App;
