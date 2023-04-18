import axios from "axios";

export const user = axios.create({
  baseURL: "https://urban-parking-server.vercel.app/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const auth = axios.create({
  baseURL: "https://urban-parking-server.vercel.app/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const parking = axios.create({
  baseURL: "https://urban-parking-server.vercel.app/parking",
  headers: {
    "Content-Type": "application/json",
  },
});
