import {
  API,
  APIRequest,
  APIClientConfig,
  apiCallWithCustomURIPath,
} from "./client";

/**
 * Get the logged in user
 * Returns information about the logged in user.
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @see {@link APIClientConfig}
 *
 * @public
 */
export const Current = async (
  config: APIClientConfig,
  methodCall: (config: APIClientConfig, path: string) => Promise<API.User>
) => {
  return await methodCall(config, "/users/current");
};

/**
 * Returns an anonymous function for creating or getting a User data.
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
export const User: APIRequest<API.User> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<API.User>
  ) => {
    return apiCallWithCustomURIPath<API.User>(config, methodCall);
  },
};
