import axios from "axios";

// const baseURL = "https://portfolio.api.tadesse.dev/api/v1/";
const baseURL = "http://localhost:4000/api/v1/";
const root = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export function sendGet(custom) {
  return root.get(custom);
}

export function sendPost(custom, data) {
  return root.post(custom, data);
}
