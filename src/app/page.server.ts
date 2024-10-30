async function fetchAccessToken() {
  const baseURL = "https://sb.stack-ai.com/auth/v1/token?grant_type=password";
  const password = process.env.PASSWORD;
  const apikey = process.env.API_KEY;

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
    throw new Error("Failed to fetch todos");
  }
  const json = await response.json();
  const accessToken = json.access_token;

  return accessToken;
}

export async function fetchResources() {
  const accessToken = await fetchAccessToken();
  const connectionID = "55b3d64d-4ac2-4b00-bd18-018007398ccf";
  const URL = `https://api.stack-ai.com/connections/${connectionID}/resources/children`;
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const json = await response.json();
  return json;
}
