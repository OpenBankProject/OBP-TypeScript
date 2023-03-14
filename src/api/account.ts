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
