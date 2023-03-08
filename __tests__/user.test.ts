import { describe, test, expect } from "@jest/globals";
import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  User,
  Current,
} from "../src/api";

describe("User", () => {
  test("get<API.User> Current should be able to get the Current User.", async () => {
    const directLogin: DirectLoginAuthentication = {
      username: global.obpUsername,
      password: global.obpPassword,
      consumerKey: global.obpConsumerKey,
    };
    const clientConfig: APIClientConfig = {
      baseUri: global.obpBaseUri,
      version: global.obpVersion as Version,
      authentication: directLogin,
    };
    const users = await get<API.User>(clientConfig, User)(Current);
    expect(users).toBeDefined();
  });
});
