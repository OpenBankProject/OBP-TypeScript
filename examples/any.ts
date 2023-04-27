import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  Any,
  GetAny,
} from "../src/api";
import { OAuthConfig } from "../src/oauth";

//const directLogin: DirectLoginAuthentication = {
//  username: process.env.OBP_USERNAME,
//  password: process.env.OBP_PASSWORD,
//  consumerKey: process.env.OBP_CONSUMER_KEY,
//};
const oauthConfig: OAuthConfig = {
  baseUri: "https://apisandbox.openbankproject.com",
  consumerKey: "qhpewipvmnm3ivjk4eoanjauzac34hm0hlec3tct",
  consumerSecret: "wshyzpqydxlk2xsckcam3ioo3vbotbrh4ow4v5un",
  redirectUrl: "http://127.0.0.1:8085/callback",
  accessToken: {
    key: "2OEVAOCIT5MJPJ4JSAR5JSNB0AQUOV5YETWSE4YJ",
    secret: "D30UEBJE4QVO0ZD3LILB2VRTHRM4CPM2QKGIT2VM",
  },
};

const clientConfig: APIClientConfig = {
  baseUri: "https://apisandbox.openbankproject.com",
  version: Version.v510,
  //authentication: directLogin,
  oauthConfig: oauthConfig,
};

(async () => {
  // Get Resource Docs
  console.log(
    await get<API.Any>(clientConfig, Any)(GetAny)(
      "/resource-docs/v5.1.0/obp?tags=Account"
    )
  );
  // Get current user login
  console.log(await get<API.Any>(clientConfig, Any)(GetAny)("/users/current"));
})();
