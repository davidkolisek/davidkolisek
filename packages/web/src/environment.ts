declare let process: { env: { [key: string]: any } };

export const environment = {
  appName: process.env.APP_NAME,
  apiKey: "",
  movieApiKey: "",
  production: process.env.NODE_ENV === "production",
  buildId: process.env.BUILD_ID,
  googleAnalytics: "",
};
