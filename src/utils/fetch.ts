import { ApiResponse } from "@/types/apiResponse.type";

const API_URL = import.meta.env.VITE_APP_API_URL;

const getJSON = async <T>(url: string) => request<T>(url);

const postJSON = async <Config extends BodyInit, T>(url: string, body: Config) =>
  request<T>(url, { method: "POST", body });

const request = async <T>(endpoint: string, config?: RequestInit): Promise<ApiResponse<T>> => {
  let data = null;
  let error = null;

  try {
    const response = await fetch(`${API_URL}/${endpoint}`, config);
    if (response.ok) {
      data = await response.json();
    } else {
      error = response.statusText;
    }
  } catch (err: any) {
    error = err?.message;
  }

  return { data, error };
};

export { getJSON, postJSON };
