import { ResourceType } from "@/types";

const connectionID: string = "55b3d64d-4ac2-4b00-bd18-018007398ccf";

async function fetchAccessToken() {
  const baseURL: string =
    "https://sb.stack-ai.com/auth/v1/token?grant_type=password";
  const password: string | undefined = process.env.PASSWORD;
  const apikey: string | undefined = process.env.API_KEY;

  const response = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Apikey: apikey || "",
    },
    body: JSON.stringify({
      email: "stackaitest@gmail.com",
      password,
      gotrue_meta_security: {},
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch resources");
  }
  const json: {
    access_token: string;
    [k: string]: unknown;
  } = await response.json();
  const accessToken: string = json.access_token;

  return accessToken;
}

export async function fetchResources() {
  const accessToken: string = await fetchAccessToken();
  const URL: string = `https://api.stack-ai.com/connections/${connectionID}/resources/children`;
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const json: ResourceType[] = await response.json();
  return json;
}

export async function fetchSingleResource(resource_id: string) {
  const accessToken: string = await fetchAccessToken();
  const URL: string = `https://api.stack-ai.com/connections/${connectionID}/resources/children?resource_id=${resource_id}`;
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const json: ResourceType[] = await response.json();
  return json;
}
