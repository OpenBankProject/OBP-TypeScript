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
  // Get Customer at one Bank.
  console.log(
    await get<API.Customer>(clientConfig, Customer)(GetCustomersAtBank)(
      "joinfincubator.01.uk.bk0"
    )
  );

  // Get Customer at any Bank.
  console.log(
    await get<API.Customer>(clientConfig, Customer)(GetCustomersAtAnyBank)
  );
})();
