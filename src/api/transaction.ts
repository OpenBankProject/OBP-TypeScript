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
