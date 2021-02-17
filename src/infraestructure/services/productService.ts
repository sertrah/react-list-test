import { api } from "infraestructure/helpers";

function getAll() {
  return api.get("") ;
}

export const productService = {
  getAll,
};
