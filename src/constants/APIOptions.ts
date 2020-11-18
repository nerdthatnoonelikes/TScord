export interface APIOptions {
    endpoint: string;
    method: "GET" | "POST" | "DELETE" | "PUT";
    body?: any;
  }