import { describe, test, expect } from "@jest/globals";
import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  Bank,
  GetBanks,
} from "../src/api";

describe("Bank", () => {
  test("get<API.Bank> should be able to get the OBP Bank data.", async () => {
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
    const banks = await get<API.Bank>(clientConfig, Bank)(GetBanks);
    expect(banks).toBeDefined();
  });
});
