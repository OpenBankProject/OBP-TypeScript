import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  Any,
  GetAny,
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
  // Get Resource Docs
  console.log(
    await get<API.Any>(clientConfig, Any)(GetAny)(
      "/resource-docs/v5.1.0/obp?tags=Account"
    )
  );
})();
