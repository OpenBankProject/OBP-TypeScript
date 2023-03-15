obp-typescript / [Modules](modules.md)

# OBP-TypeScript

## Usage

#### Symlink

Checkout the obp-typescript library from https://github.com/OpenBankProject/OBP-TypeScript.
Inside the obp-sdk repository folder, execute the **yarn link** command.

```
  yarn link
```

To link the **obp-typescript** library into your app, run the command inside your app.

```
  yarn link obp-typescript
```

#### Example

```typescript
import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  create,
  Bank,
  Account,
  Transaction,
  GetTransactionsForAccountFull,
  TransactionRequestAccountBody,
  CreateTransactionRequestAccount,
} from "obp-typescript/src";

(async () => {
  const directLogin: DirectLoginAuthentication = {
    username: process.env.OBP_USERNAME || "",
    password: process.env.OBP_PASSWORD || "",
    consumerKey: process.env.OBP_CONSUMER_KEY || "",
  };
  const clientConfig: APIClientConfig = {
    baseUri: "https://apisandbox.openbankproject.com",
    version: Version.v500,
    authentication: directLogin,
  };
  const banks = await get<API.Bank>(clientConfig, Bank);
  const account = await get<API.Account>(clientConfig, Account);

  const transactionFn = get<API.Transaction>(clientConfig, Transaction);
  // Get transaction for account full.
  const transactionsForAccountFull = await transactionFn(
    GetTransactionsForAccountFull
  )("bankId", "accountId", "viewId");

  // New transaction body.
  const body: TransactionRequestAccountBody = {
    description: "Dummy transaction full data",
    to: {
      bank_id: "bankId",
      account_id: "accountId",
    },
    value: {
      currency: "EUR",
      amount: 1.0,
    },
  };
  // Create transaction request account.
  await create<API.Transaction>(
    clientConfig,
    Transaction
  )(CreateTransactionRequestAccount)(
    "bankId",
    "accountId",
    "viewId"
  )(body);
})();
```
