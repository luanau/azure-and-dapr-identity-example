export function isProductionMode() {
  return process.env.NODE_ENV === "production";
}

export interface AuthConfig {
  clientId: string;
  authority: string;
}

export function fetchAuthConfig(): Promise<AuthConfig> {
  return Promise.resolve({
    clientId: "eb2492f3-869f-4ec3-bf88-21795c82f6b6",
    authority:
      "https://login.microsoftonline.com/d16fd310-d910-4a1f-a5c0-af83a9ad6848/",
  });
  // return fetch("/api/config/auth").then(response => {
  //   if (!response.ok) {
  //     throw new Error(
  //       `Client configuration returned HTTP status ${response.status}`
  //     );
  //   }
  //   return response.json();
  // });
}
