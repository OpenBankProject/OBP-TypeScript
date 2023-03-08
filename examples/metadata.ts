import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  Metadata,
  GetTagsOnAccount,
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
  // Get TagsOnAccount
  console.log(
    await get<API.Metadata>(clientConfig, Metadata)(GetTagsOnAccount)(
      "obp1",
      "9e6b2f45-a449-4e87-b772-e74cc9d42448",
      "owner"
    )
  );
})();
