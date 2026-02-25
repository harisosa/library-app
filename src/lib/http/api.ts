type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

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

type ApiFetchInit = {
  method?: HttpMethod;
  body?: unknown;
  token?: string | null;
  headers?: Record<string, string>;
};

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null;

const getErrorMessage = (payload: unknown): string | null => {
  if (!isRecord(payload)) return null;

  const msg = payload["message"];
  if (typeof msg === "string" && msg.trim().length > 0) return msg;

  // some APIs use "error"
  const err = payload["error"];
  if (typeof err === "string" && err.trim().length > 0) return err;

  return null;
};

const safeJsonParse = (text: string): unknown => {
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
};

export const apiFetch = async <TResponse>(
  path: string,
  init?: ApiFetchInit
): Promise<TResponse> => {
  if (!baseURL) throw new Error("NEXT_PUBLIC_API_BASE_URL is not set");

  const res = await fetch(`${baseURL}${path}`, {
    method: init?.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...(init?.token ? { Authorization: `Bearer ${init.token}` } : {}),
      ...(init?.headers ?? {}),
    },
    body: init?.body === undefined ? undefined : JSON.stringify(init.body),
    cache: "no-store",
  });

  const text = await res.text();
  const payload: unknown = text.length > 0 ? safeJsonParse(text) : null;

  if (!res.ok) {
    const message = getErrorMessage(payload) ?? `Request failed: ${res.status}`;
    throw new ApiError(message, res.status, payload);
  }

  return payload as TResponse;
};