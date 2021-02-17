import { fetchJSON } from "infraestructure/helpers";

const API_URL = `http://localhost:3100`;

function call(path: string, options = {}) {
  const url = `${API_URL}/${path}`;

  return fetchJSON(url, options).catch((error: any) => {
    if (error.status === 404) {
      alert("TODO: Hey hace algoo aca ojo no se le olvide.....")
    }
    return Promise.reject(error);
  });
}

function get(path: string) {
  return call(path, { method: "GET" });
}

export const api = { call, get };
