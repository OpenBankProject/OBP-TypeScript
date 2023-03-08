import { describe, test, expect } from "@jest/globals";
import {
  API,
  Version,
  APIClientConfig,
  DirectLoginAuthentication,
  get,
  Account,
} from "../src";
import { GetAccountsByBankId } from "../src/api/account";
import { getRequest, apiCallWithCustomURIPath } from "../src/api/client";

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

describe("Account", () => {
  test("get<API.Account> ByBankId should be able to get the OBP Accounts data.", async () => {
    const accounts = await get<API.Account>(
      clientConfig,
      Account
    )(GetAccountsByBankId)(global.obpTestBankId);

    expect(accounts).toBeDefined();
  });

  test("get<API.Account> should be able to get the OBP Accounts data.", async () => {
    const accounts = await get<API.Account>(
      clientConfig,
      Account
    )(`/banks/${global.obpTestBankId}/accounts`);

    expect(accounts).toBeDefined();
  });

  test("apiCallWithCustomURIPath should be able to get the OBP Accounts data.", async () => {
    const customPathCall = apiCallWithCustomURIPath<API.Account>(
      clientConfig,
      getRequest
    );
    const accounts = await customPathCall(
      `/banks/${global.obpTestBankId}/accounts`
    );

    expect(accounts).toBeDefined();
  });
});
