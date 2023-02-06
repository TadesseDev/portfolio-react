import axios from "axios";
const baseURL = "https://portfoliox-backend-h2ot.onrender.com/api/v1/";
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
