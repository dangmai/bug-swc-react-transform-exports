import type { Config } from "jest";
const config: Config = {
  testRegex: "((\\.|/)(test|spec))\\.(t|j)sx?$",
  transform: {
    "\\.(t|j)sx?$": "@swc/jest",
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    url: "https://example.com",
  },
};

export default config;
