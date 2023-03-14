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
  apiCallWithCustomBody,
} from "./client";

/**
 * Alias for TransactionRequestAccountBody properties.
 *
 * @Property {string} description
 * @Property {{bank_id: string, account_id: string}} to
 * @Property {{curreny: string, amount: number}} value
 *
 * @public
 */
export type TransactionRequestAccountBody = {
  description: string;
  to: {
    bank_id: string;
    account_id: string;
  };
  value: {
    currency: string;
    amount: number;
  };
};

/**
 * Get Transactions for Account (Full).
 * Returns transactions list of the account specified by ACCOUNT_ID and moderated by the view (VIEW_ID).
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @see {@link APIClientConfig}
 *
 * @public
 */
export const GetTransactionsForAccountFull =
  (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) =>
  async (
    bankId: string,
    accountId: string,
    viewId: string
  ): Promise<API.Account> => {
    const path = `/banks/${bankId}/accounts/${accountId}/${viewId}/transactions`;
    return await methodCall(config, path);
  };

/**
 * Create Transaction Request (ACCOUNT).
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @see {@link APIClientConfig}
 * @see {@link TransactionRequestAccountBody}
 *
 * @public
 */
export const CreateTransactionRequestAccount =
  (
    config: APIClientConfig,
    methodCall: (
      config: APIClientConfig,
      path: string,
      body: TransactionRequestAccountBody
    ) => Promise<any>
  ) =>
  (bankId: string, accountId: string, viewId: string, account: string) => {
    const path = `banks/${bankId}/accounts/${accountId}/${viewId}/transaction-request-types/${account}/transaction-requests`;
    return apiCallWithCustomBody<
      API.Transaction,
      TransactionRequestAccountBody
    >(config, path, methodCall);
  };

/**
 * Returns an anonymous function for creating or getting Transaction data.
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
export const Transaction: APIRequest<API.Transaction> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) => {
    return apiCallWithCustomURIPath<API.Transaction>(config, methodCall);
  },
  create: (
    config: APIClientConfig,
    methodCall: (
      config: APIClientConfig,
      path: string,
      body: TransactionRequestAccountBody
    ) => Promise<any>
  ) => {
    return apiCallWithCustomURIPath<API.Transaction>(config, methodCall);
  },
};
