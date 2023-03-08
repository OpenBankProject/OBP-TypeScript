import superagent from "superagent";

/**
 * OBP API Versions.
 *
 * @public
 */
export enum Version {
  v500 = "v5.0.0",
  v510 = "v5.1.0",
}

/**
 * Types of OBP API.
 *
 * @public
 */
export enum API {
  Bank,
  Account,
  Payment,
  Transaction,
  User,
  Customer,
  KYC,
  Metadata,
}

/**
 * Alias for DirectLogin properties.
 *
 * @Property {string} username
 * @Property {string} passowrd
 * @Property {string} consumerKey
 *
 * @public
 */
export type DirectLoginAuthentication = {
  username: string;
  password: string;
  consumerKey: string;
};

/**
 * Alias for APIClientConfig properties.
 * @type {Object}
 *
 * @Property {string} baseUri
 * @Property {Version} version
 * @Property {DirectLoginAuthentication} authentication
 * @Property {string} [token]
 *
 * @see {@link Version}
 * @see {@link DirectLoginAuthentication}
 *
 * @public
 */
export type APIClientConfig = {
  baseUri: string;
  version: Version;
  authentication: DirectLoginAuthentication;
  token?: string;
};

/**
 * Alias for HTTP MethodCall properties.
 * @type {Object}
 * @typeParam T - Type of object
 *
 * @Property {APIClientConfig} config
 * @Property {string} path
 * @Property {any} [body]
 *
 * @see APIClientConfig
 *
 * @public
 */
export type MethodCall<T> = (
  config: APIClientConfig,
  path: string,
  body?: any
) => Promise<T>;

/**
 * Alias for APIRequest properties.
 * @type {Object}
 * @typeParam T - Type of object
 *
 * @Property {(config: APIClientConfig, methodCall: MethodCall<T>) => any} [get]
 * @Property {(config: APIClientConfig, methodCall: MethodCall<T>) => any} [create]
 *
 * @see {@link APIClientConfig}
 * @see {@link MethodCall}
 *
 * @public
 */
export type APIRequest<T> = {
  get?: (config: APIClientConfig, methodCall: MethodCall<T>) => any;
  create?: (config: APIClientConfig, methodCall: MethodCall<T>) => any;
};

/**
 * Alias for RequestParameter properties.
 * @type {Object}
 * @typeParam T - Type of object
 *
 * @Property {APIClientConfig} config
 * @Property {MethodCall<T>} methodCall
 *
 * @see APIClientConfig
 * @see MethodCall<T>
 *
 * @public
 */
export type RequestParameter<T> = (
  config: APIClientConfig,
  methodCall: MethodCall<T>
) => T;

/**
 * Returns the absolute URI path.
 *
 * @param config - The APIClientConfig object
 * @param path - The relative path
 * @returns The absolute URI
 *
 * @public
 */
const uri = (config: APIClientConfig, path: string): string => {
  const base = config.baseUri;
  const version = config.version;
  if (path.startsWith("/")) {
    return `${base}/obp/${version}${path}`;
  } else {
    return `${base}/obp/${version}/${path}`;
  }
};

/**
 * Returns an anonymous function.
 * @typeParam T - Type of API
 *
 * @param config - The APIClientConfig object
 * @param methodCall<T> - The HTTP method function
 * @returns A curried function
 *
 * @see API
 * @see APIClientConfig
 * @see MethodCall<T>
 *
 * @public
 */
export const apiCallWithCustomURIPath =
  <T>(config: APIClientConfig, methodCall: MethodCall<T>) =>
  (path: string | RequestParameter<T>) => {
    if (typeof path === "string") {
      return methodCall(config, path.toString());
    } else {
      return path(config, methodCall);
    }
  };

/**
 * Returns an anonymous function.
 * @typeParam T - Type of API
 * @typeParam E - The response type
 *
 * @param config - The APIClientConfig object
 * @param path - The URI path
 * @param methodCall<T> - The HTTP method function
 * @returns A curried function
 *
 * @see API
 * @see APIClientConfig
 * @see MethodCall<T>
 *
 * @public
 */
export const apiCallWithCustomBody =
  <T, E>(config: APIClientConfig, path: string, methodCall: MethodCall<T>) =>
  (body: E) => {
    return methodCall(config, path, body);
  };

/**
 * Returns the Authorization DirectLogin header value.
 *
 * @param config - The APIClientConfig object
 * @returns A {string} value
 *
 * @see APIClientConfig
 *
 * @public
 */
const getDirectLoginToken = async (
  config: APIClientConfig
): Promise<string> => {
  if (!config.authentication) {
    console.warn("Authentication is not set.");
    return "";
  }
  const loginUri = config.baseUri + "/my/logins/direct";
  const username = config.authentication.username;
  const password = config.authentication.password;
  const consumerKey = config.authentication.consumerKey;
  const directLogin = `DirectLogin username=${username},password=${password},consumer_key=${consumerKey}`;
  const response = JSON.parse(
    (
      await superagent
        .post(loginUri)
        .set("Content-Type", "application/json")
        .set("Authorization", directLogin)
    ).text
  );
  return "DirectLogin token=" + response.token;
};

/**
 * Send a GET request and returns a response.
 *
 * @param config - The APIClientConfig object
 * @returns An {object} value
 *
 * @see APIClientConfig
 *
 * @public
 */
export const getRequest = async (
  config: APIClientConfig,
  path: string
): Promise<any> => {
  const pathUri = uri(config, path);
  if (!config.token) {
    config.token = await getDirectLoginToken(config);
  }
  return JSON.parse(
    (await superagent.get(pathUri).set("Authorization", config.token)).text
  );
};

/**
 * Send a POST request and returns a response.
 *
 * @param config - The APIClientConfig object
 * @param path - The URI path
 * @param body - The request body
 * @returns An {object} value
 *
 * @see APIClientConfig
 *
 * @public
 */
export const postRequest = async (
  config: APIClientConfig,
  path: string,
  body: any
): Promise<any> => {
  const pathUri = uri(config, path);
  if (!config.token) {
    config.token = await getDirectLoginToken(config);
  }
  return JSON.parse(
    (
      await superagent
        .post(pathUri)
        .set("Authorization", config.token)
        .send(body)
    ).text
  );
};

/**
 * A GET request function that returns the API data.
 *
 * @param config - The APIClientConfig object
 * @param request - The APIRequest object
 * @returns An @typeParam {Object} value
 *
 * @see APIClientConfig
 * @see APIRequest<T>
 *
 * @public
 */
export const get = <T>(
  config: APIClientConfig,
  request: APIRequest<T>
): any => {
  return request.get(config, getRequest);
};

/**
 * A POST request function that creates an API data and returns the result.
 *
 * @param config - The APIClientConfig object
 * @param request - The APIRequest object
 * @returns An @typeParam {Object} value
 *
 * @see APIClientConfig
 * @see APIRequest<T>
 *
 * @public
 */
export const create = <T>(
  config: APIClientConfig,
  request: APIRequest<T>
): any => {
  return request.create(config, postRequest);
};
