import { describe, test, expect } from "@jest/globals";
import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  KYC,
  GetKYCStatus,
} from "../src/api";

describe("KYC", () => {
  test("get<API.KYC> GetKYCStatus should be able to get the OBP KYC Status data.", async () => {
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
    const kycStatus = await get<API.KYC>(clientConfig, KYC)(GetKYCStatus)(
      "9e6b2f45-a449-4e87-b772-e74cc9d42448"
    );
    expect(kycStatus).toBeDefined();
  });
});
