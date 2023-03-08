import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  User,
  Current,
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
  // Get current User
  console.log(await get<API.User>(clientConfig, User)(Current));
})();
