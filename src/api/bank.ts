import {
  API,
  APIRequest,
  APIClientConfig,
  apiCallWithCustomURIPath,
} from "./client";

/**
 * Get the bank specified by BANK_ID.
 * Returns information about a single bank specified by BANK_ID.
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @see {@link APIClientConfig}
 *
 * @public
 */
export const GetBanksById =
  (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) =>
  async (id: string): Promise<API.Account> => {
    const path = `/banks/${id}`;
    return await methodCall(config, path);
  };

/**
 * Get banks on this API instance.
 * Returns a list of banks.
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @see {@link APIClientConfig}
 *
 * @public
 */
export const GetBanks = async (
  config: APIClientConfig,
  methodCall: (config: APIClientConfig, path: string) => Promise<any>
) => {
  return await methodCall(config, "banks");
};

/**
 * Returns an anonymous function for creating or getting Bank data.
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
export const Bank: APIRequest<API.Bank> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) => {
    return apiCallWithCustomURIPath<API.Bank>(config, methodCall);
  },
};
