import axios from "axios";

export const auth = axios.create({
  baseURL: "https://urban-parking-server.vercel.app/users",
  headers: {
    "Content-Type": "application/json",
  },
});
