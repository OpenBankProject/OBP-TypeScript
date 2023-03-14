/**
 * Open Bank Project - OBP-TypeScript
 * Copyright (C) 2011-2023, TESOBE GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Email: contact@tesobe.com
 * TESOBE GmbH
 * Osloerstrasse 16/17
 * Berlin 13359, Germany
 *
 *  This product includes software developed at
 *  TESOBE (http://www.tesobe.com/)
 */

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
