import {
  API,
  APIRequest,
  APIClientConfig,
  apiCallWithCustomURIPath,
} from "./client";

/**
 * Returns the account ACCOUNT_ID tags made on a view (VIEW_ID).
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @see {@link APIClientConfig}
 *
 * @public
 */
export const GetTagsOnAccount =
  (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) =>
  async (bankId: string, accountId: string, viewId: string) => {
    return await methodCall(
      config,
      `/banks/${bankId}/accounts/${accountId}/${viewId}/metadata/tags`
    );
  };

/**
 * Returns an anonymous function for creating or getting Metadata data.
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
export const Metadata: APIRequest<API.Metadata> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) => {
    return apiCallWithCustomURIPath<API.Metadata>(config, methodCall);
  },
};
