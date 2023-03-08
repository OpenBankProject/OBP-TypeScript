import { describe, test, expect } from "@jest/globals";
import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  Metadata,
  GetTagsOnAccount,
} from "../src/api";

describe("Metadata", () => {
  test("get<API.Metadata> should be able to get the OBP Metadata data.", async () => {
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
    const tagsOnAccount = await get<API.Metadata>(
      clientConfig,
      Metadata
    )(GetTagsOnAccount)(
      global.obpTestBankId,
      "9e6b2f45-a449-4e87-b772-e74cc9d42448",
      "owner"
    );
    console.log(tagsOnAccount);
    expect(tagsOnAccount).toBeDefined();
  });
});
