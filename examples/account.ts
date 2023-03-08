import {
  API,
  Version,
  APIClientConfig,
  DirectLoginAuthentication,
  get,
  Account,
} from "../src";
import { GetAccountsByBankId } from "../src/api/account";

const directLogin: DirectLoginAuthentication = {
  username: process.env.OBP_USERNAME,
  password: process.env.OBP_PASSWORD,
  consumerKey: process.env.OBP_CONSUMER_KEY,
};
const clientConfig: APIClientConfig = {
  baseUri: "https://obp-apisandbox.joinfincubator.com",
  version: Version.v510,
  authentication: directLogin,
};

(async () => {
  // Get Accounts
  console.log(
    await get<API.Account>(clientConfig, Account)(GetAccountsByBankId)(
      "d8839721-ad8f-45dd-9f78-2080414b93f9"
    )
  );

  // Or with custom relative path
  console.log(
    await get<API.Account>(
      clientConfig,
      Account
    )(`/banks/d8839721-ad8f-45dd-9f78-2080414b93f9/accounts`)
  );
})();
