import ProductList from "entities/product/ProductList";
import Client from "entities/client";
import Home from "entities/home";
import Contact from "entities/contact";

import { ROUTER_PATH_LIST } from "./constants";

const routes = [
  {
    path: ROUTER_PATH_LIST.default,
    component: Home,
  },
  {
    path: ROUTER_PATH_LIST.contact,
    component: Contact,
  },
  {
    path: ROUTER_PATH_LIST.product,
    component: ProductList,
  },
  {
    path: ROUTER_PATH_LIST.client,
    component: Client,
  },
  {
    path: `${ROUTER_PATH_LIST.product}/:category`,
    component: ProductList,
  },
];

export default routes;
