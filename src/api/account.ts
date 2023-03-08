import {
  API,
  APIRequest,
  APIClientConfig,
  apiCallWithCustomURIPath,
} from "./client";

/**
 * Get Accounts at Bank.
 * Returns the list of accounts at BANK_ID that the user has access to.
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @see {@link APIClientConfig}
 *
 * @public
 */
export const GetAccountsByBankId =
  (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<API.Account>
  ) =>
  async (id: string): Promise<API.Account> => {
    const path = `/banks/${id}/accounts`;
    return await methodCall(config, path);
  };

/**
 * Returns an anonymous function for creating or getting an Account data.
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A higher order function
 *
 * @see {@link APIClientConfig}
 * @see {@link APIRequest}
 *
 * @public
 */
export const Account: APIRequest<API.Account> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<API.Account>
  ) => {
    return apiCallWithCustomURIPath<API.Account>(config, methodCall);
  },
};
