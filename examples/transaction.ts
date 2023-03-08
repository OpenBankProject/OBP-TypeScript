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
  username: process.env.OBP_USERNAME,
  password: process.env.OBP_PASSWORD,
  consumerKey: process.env.OBP_CONSUMER_KEY,
};
const clientConfig: APIClientConfig = {
  baseUri: "https://apisandbox.openbankproject.com",
  version: Version.v510,
  authentication: directLogin,
};
const bankId = "rbs";
const accountId = "9e6b2f45-a449-4e87-b772-e74cc9d42448";
const viewId = "owner";

(async () => {
  //Get Transaction
  await get<API.Transaction>(
    clientConfig,
    Transaction
  )(GetTransactionsForAccountFull)(bankId, accountId, viewId);

  //Get Transaction with custom relative path
  await get<API.Transaction>(
    clientConfig,
    Transaction
  )(`/banks/${bankId}/accounts/${accountId}/${viewId}/transactions`);

  // Requst body for creating a transaction
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
  await create<API.Transaction>(
    clientConfig,
    Transaction
  )(CreateTransactionRequestAccount)(
    bankId,
    accountId,
    viewId,
    "SANDBOX_TAN"
  )(body);
})();
