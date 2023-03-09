/**
 * Open Bank Project - OBP-TypeScript
 * Copyright (C) 2011-2023, TESOBE GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
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
