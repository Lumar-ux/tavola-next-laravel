"use server";

import type { ActionResponse, AddressFormData } from "@/lib/definitions";

export async function submitAddress(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {

  try {
    const rawData: AddressFormData = {
      firstname: getString(formData.get("firstname")),
      name: getString(formData.get("name")),
      email: getString(formData.get("email")),
      object: getString(formData.get("object")),
      text: getString(formData.get("text")),
    };
    const apiUrl = resolveAddressApiUrl();

    if (!apiUrl) {
      return {
        success: false,
        message:
          "Message API URL is not configured. Please set MESSAGE_API_URL or API_BASE_URL.",
      };
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(rawData),
    });

    const payload = await readJson(response);

    if (response.ok) {
      return {
        success: true,
        message:
          typeof payload?.message === "string"
            ? payload.message
            : "Address saved successfully!",
      };
    }

    if (response.status === 422) {
      return {
        success: false,
        message:
          typeof payload?.message === "string"
            ? payload.message
            : "Please fix the errors in the form",
        errors: payload?.errors,
      };
    }

    return {
      success: false,
      message:
        typeof payload?.message === "string"
          ? payload.message
          : `Failed to save address (status ${response.status}). Please try again later.`,
    };
  } catch (error) {
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}

function getString(value: FormDataEntryValue | null): string {
  if (typeof value === "string") {
    return value;
  }

  return "";
}

async function readJson(response: Response): Promise<any | null> {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function resolveAddressApiUrl(): string | null {
  const env = getRuntimeEnv();

  if (env.MESSAGE_API_URL) {
    return env.MESSAGE_API_URL;
  }else if(env.API_BASE_URL){
    return env.API_BASE_URL;
  }
  return null;
}

type RuntimeEnv = Record<string, string | undefined>;

function getRuntimeEnv(): RuntimeEnv {
  if (typeof globalThis === "undefined") {
    return {};
}

  const maybeProcess = (
    globalThis as typeof globalThis & { process?: { env?: RuntimeEnv } }
  ).process;

  return maybeProcess?.env ?? {};
}
