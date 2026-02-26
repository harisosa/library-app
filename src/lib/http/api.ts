import type { AxiosRequestConfig } from "axios";
import { http } from "./client";

export const api = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const res = await http.request<T>(config);
  return res.data;
};