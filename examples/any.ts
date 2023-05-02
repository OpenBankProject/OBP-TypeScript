import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  create,
  update,
  discard,
  Any,
  GetAny,
  CreateAny,
  UpdateAny,
  DiscardAny,
} from "../src/api";
import { OAuthConfig } from "../src/auth";

const directLogin: DirectLoginAuthentication = {
  username: process.env.OBP_USERNAME,
  password: process.env.OBP_PASSWORD,
  consumerKey: process.env.OBP_CONSUMER_KEY,
};
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
  withFixedVersion: true,
  authentication: directLogin,
  //oauthConfig: oauthConfig,
};

(async () => {
  // Get Resource Docs
  //console.log(
  //  await get<API.Any>(clientConfig, Any)(GetAny)(
  //    "/resource-docs/v5.1.0/obp?tags=Account"
  //  )
  //);
  //// Get current user login
  //console.log(await get<API.Any>(clientConfig, Any)(GetAny)("/users/current"));

  // Create transaction
  //const transaction = {
  //  description: "test transaction full data",
  //  to: {
  //    bank_id: "rbs",
  //    account_id: "9e6b2f45-a449-4e87-b772-e74cc9d42448",
  //  },
  //  value: {
  //    currency: "EUR",
  //    amount: 1.0,
  //  },
  //};
  //console.log(
  //  await create<API.Any>(clientConfig, Any)(CreateAny)(
  //    "banks/rbs/accounts/9e6b2f45-a449-4e87-b772-e74cc9d42448/owner/transaction-request-types/ACCOUNT/transaction-requests"
  //  )(transaction)
  //);
  // Create transaction attribute
  //const transactionAttributeNew = {
  //  name: "HOUSE_RENT",
  //  type: "DATE_WITH_DAY",
  //  value: "123456789",
  //};
  //console.log(
  //  await create<API.Any>(clientConfig, Any)(CreateAny)(
  //    "banks/rbs/accounts/9e6b2f45-a449-4e87-b772-e74cc9d42448/transaction-requests/12f996cf-d3a9-4df3-8a1e-697a603609dd/attribute"
  //  )(transactionAttributeNew)
  //);
  // Update transaction
  //const transactionAttributeUpdate = {
  //  name: "HOUSE_RENT",
  //  type: "DATE_WITH_DAY",
  //  value: "0000000",
  //};
  //console.log(
  //  await update<API.Any>(clientConfig, Any)(UpdateAny)(
  //    "banks/rbs/accounts/9e6b2f45-a449-4e87-b772-e74cc9d42448/transaction-requests/12f996cf-d3a9-4df3-8a1e-697a603609dd/attributes/49ff9d5f-3f7d-4b58-987a-de99cdbf2b39"
  //  )(transactionAttributeUpdate)
  //);
  // Create transaction attribute definition
  //const transactionAttributeDefinition = {
  //  name: "SPECIAL_TAX_NUMBER",
  //  category: "TransactionRequest",
  //  type: "STRING",
  //  description: "description",
  //  alias: "STRING",
  //  can_be_seen_on_views: ["bank"],
  //  is_active: true,
  //};
  //console.log(
  //  await update<API.Any>(clientConfig, Any)(UpdateAny)(
  //    "banks/rbs/attribute-definitions/transaction-request"
  //  )(transactionAttributeDefinition)
  //);
  // Delete transaction attribute definition
  console.log(
    await discard<API.Any>(clientConfig, Any)(DiscardAny)(
      "banks/rbs/attribute-definitions/06122dff-8575-4ff1-9f42-427d3e44ac88/transaction-request"
    )
  );
})();
