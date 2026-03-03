import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { store } from "@/store/store";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly payload?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const http = axios.create({
  baseURL,
});

const getMessage = (payload: unknown): string | null => {
  if (!payload || typeof payload !== "object") return null;
  const rec = payload as Record<string, unknown>;

  const msg = rec["message"];
  if (typeof msg === "string" && msg.trim()) return msg;

  const err = rec["error"];
  if (typeof err === "string" && err.trim()) return err;

  return null;
};

http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = store.getState().auth.accessToken;

  config.headers = config.headers ?? {};

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const isFormData =
    typeof FormData !== "undefined" && config.data instanceof FormData;

  if (isFormData) {
    delete (config.headers as Record<string, unknown>)["Content-Type"];
    delete (config.headers as Record<string, unknown>)["content-type"];
  } else {
    if (!config.headers["Content-Type"] && !config.headers["content-type"]) {
      config.headers["Content-Type"] = "application/json";
    }
  }

  return config;
});

http.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    const status = err.response?.status ?? 0;
    const payload = err.response?.data;

    const message =
      getMessage(payload) ??
      err.message ??
      (status ? `Request failed: ${status}` : "Network error");

    return Promise.reject(new ApiError(message, status, payload));
  }
);