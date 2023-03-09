import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  testTimeout: 1000000,
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  moduleNameMapper: {
    "^@obp-typescript/(.*)$": "<rootDir>/src/$1",
  },
  reporters: ["default", "jest-junit"],
  globals: {
    obpUsername: process.env.OBP_USERNAME,
    obpPassword: process.env.OBP_PASSWORD,
    obpConsumerKey: process.env.OBP_CONSUMER_KEY,
    //obpBaseUri: "https://apisandbox.openbankproject.com",
    obpBaseUri: "https://obp-apisandbox.joinfincubator.com",
    obpVersion: "v5.1.0",
    //obpTestBank: "rbs",
    obpTestBankId: "joinfincubator.01.uk.bk0",
  },
};

export default jestConfig;
