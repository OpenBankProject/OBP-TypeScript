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
