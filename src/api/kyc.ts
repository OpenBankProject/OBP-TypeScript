import {
  API,
  APIRequest,
  APIClientConfig,
  apiCallWithCustomURIPath,
} from "./client";

/**
 * Get the KYC statuses for a customer specified by CUSTOMER_ID over time.
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @see {@link APIClientConfig}
 *
 * @public
 */
export const GetKYCStatus =
  (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) =>
  async (customerId: string) => {
    return await methodCall(config, `/customers/${customerId}/kyc_statuses`);
  };

/**
 * Returns an anonymous function for creating or getting KYC data.
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
export const KYC: APIRequest<API.KYC> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) => {
    return apiCallWithCustomURIPath<API.KYC>(config, methodCall);
  },
};
