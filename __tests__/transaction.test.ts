import { describe, test, expect } from "@jest/globals";
import {
  API,
  Version,
  APIClientConfig,
  DirectLoginAuthentication,
  create,
  get,
  Transaction,
} from "../src/api";
import {
  GetTransactionsForAccountFull,
  CreateTransactionRequestAccount,
  TransactionRequestAccountBody,
} from "../src/api/transaction";

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
const bankId = global.obpTestBankId;
const accountId = "9e6b2f45-a449-4e87-b772-e74cc9d42448";
const viewId = "owner";

describe("Transaction", () => {
  test("get<API.Transaction> ByBankId should be able to get the OBP Transactions data.", async () => {
    const transactions = await get<API.Transaction>(
      clientConfig,
      Transaction
    )(GetTransactionsForAccountFull)(bankId, accountId, viewId);

    expect(transactions).toBeDefined();
  });

  test("get<API.Transaction> should be able to get the OBP Transactions data.", async () => {
    const transactions = await get<API.Transaction>(
      clientConfig,
      Transaction
    )(`/banks/${bankId}/accounts/${accountId}/${viewId}/transactions`);

    expect(transactions).toBeDefined();
  });

  test("create<API.Transaction, TransactionFullBody> should be able to createn an OBP Transaction Full data.", async () => {
    const body: TransactionRequestAccountBody = {
      description: "test transaction full data",
      to: {
        bank_id: bankId,
        account_id: accountId,
      },
      value: {
        currency: "EUR",
        amount: 1.0,
      },
    };
    const transactions = await create<API.Transaction>(
      clientConfig,
      Transaction
    )(CreateTransactionRequestAccount)(
      bankId,
      accountId,
      viewId,
      "SANDBOX_TAN"
    )(body);

    expect(transactions).toBeDefined();
  });
});
