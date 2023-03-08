import { describe, test, expect } from "@jest/globals";
import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  Customer,
  GetCustomersAtBank,
  GetCustomersAtAnyBank,
} from "../src/api";

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
describe("Customer", () => {
  test("get<API.Customer> GetCustomersAtBank should be able to get the OBP Customer data.", async () => {
    const customers = await get<API.Customer>(
      clientConfig,
      Customer
    )(GetCustomersAtBank)(global.obpTestBankId);
    expect(customers).toBeDefined();
  });
  test("get<API.Customer> GetCustomersAtAnyBank should be able to get the OBP Customer data.", async () => {
    const customers = await get<API.Customer>(
      clientConfig,
      Customer
    )(GetCustomersAtAnyBank);
    expect(customers).toBeDefined();
  });
});
