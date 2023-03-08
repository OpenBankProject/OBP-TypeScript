import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  Bank,
  GetBanks,
  GetBanksById,
} from "../src/api";

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
  // Get Banks
  console.log(await get<API.Bank>(clientConfig, Bank)(GetBanks));

  // Get Bank specified by BANK_ID
  console.log(
    await get<API.Bank>(clientConfig, Bank)(GetBanksById)(
      "d8839721-ad8f-45dd-9f78-2080414b93f9"
    )
  );
})();
