import { describe, test, expect } from "@jest/globals";
import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  Any,
  GetAny,
} from "../src/api";

describe("Any", () => {
  test("get<API.Any> should be able to get any OBP data.", async () => {
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
    const resourceDocs = await get<API.Any>(clientConfig, Any)(GetAny)(
      "/resource-docs/v5.1.0/obp?tags=Account"
    );
    expect(resourceDocs).toBeDefined();
  });
});
