import { ResourceType } from "@/types";

const connectionID: string = "55b3d64d-4ac2-4b00-bd18-018007398ccf";
const apikey = process.env.API_KEY;
const password = "!z4ZnxkyLYs#vR";

async function fetchAccessToken() {
  const baseURL = "https://sb.stack-ai.com/auth/v1/token?grant_type=password";

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
    throw new Error("Failed to fetch access token");
  }

  const json = await response.json();
  const access_token = json.access_token;
  return access_token;
}

export async function fetchResources() {
  const accessToken: string | null = await fetchAccessToken();
  const URL: string = `https://api.stack-ai.com/connections/${connectionID}/resources/children`;
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch resources");
  }
  const json: ResourceType[] = await response.json();
  return {
    token: accessToken,
    json,
  };
}

export async function fetchSingleResource(resource_id: string, token: string | null) {
  const URL: string = `https://api.stack-ai.com/connections/${connectionID}/resources/children?resource_id=${resource_id}`;
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch resource info");
  }
  const json = await response.json();
  return json;
}
