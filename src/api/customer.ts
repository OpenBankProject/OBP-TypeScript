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
 * Alias for CustomerBody properties.
 *
 * @Property {{currency: string, amount: number}} credit_limit
 * @Property {{url: string, date: string}} face_image
 * @Property {string} legal_name
 * @Property {string} mobile_phone_number
 * @Property {{rating:string, source:string}} credit_rating
 * @Property {string} [customer_number]
 * @Property {string} [email]
 * @Property {string} [date_of_birth]
 * @Property {string} [relationship_status]
 * @Property {string} [dependants]
 * @Property {Array.<string>} [dob_of_dependants]
 * @Property {string} [highest_education_attained]
 * @Property {string} [employment_status]
 * @Property {boolean} [kyc_status]
 * @Property {string} [last_ok_date]
 * @Property {string} [title]
 * @Property {string} [branch_id]
 * @Property {string} [name_suffix]
 *
 * @public
 */
export type CustomerBody = {
  credit_limit: {
    currency: string;
    amount: number;
  };
  face_image: {
    url: string;
    date: string;
  };
  legal_name: string;
  mobile_phone_number: string;
  credit_rating: {
    rating: string;
    source: string;
  };
  customer_number?: number;
  email?: string;
  date_of_birth?: string;
  relationship_status?: string;
  dependants?: number;
  dob_of_dependants?: Array<string>;
  highest_education_attained?: string;
  employment_status?: string;
  kyc_status?: boolean;
  last_ok_date?: string;
  title?: string;
  branch_id?: string;
  name_suffix?: string;
};

/**
 * Get Customers at Any Bank.
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @see {@link APIClientConfig}
 *
 * @public
 */
export const GetCustomersAtAnyBank = async (
  config: APIClientConfig,
  methodCall: (config: APIClientConfig, path: string) => Promise<any>
) => {
  return await methodCall(config, "/customers");
};

/**
 * Get Customers at Bank.
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @see {@link APIClientConfig}
 *
 * @public
 */
export const GetCustomersAtBank =
  (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) =>
  async (bankId: string): Promise<API.Customer> => {
    const path = `/banks/${bankId}/customers`;
    return await methodCall(config, path);
  };

/**
 * Create Customer.
 * The Customer resource stores the customer number (which is set by the backend), legal name, email, phone number,
 * their date of birth, relationship status, education attained, a url for a profile image, KYC status etc.
 * Dates need to be in the format 2013-01-21T23:08:00Z
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @see {@link APIClientConfig}
 * @see {@link CustomerBody}
 *
 * @public
 */
export const CreateCustomers =
  (
    config: APIClientConfig,
    methodCall: (
      config: APIClientConfig,
      path: string,
      body: CustomerBody
    ) => Promise<any>
  ) =>
  (bankId: string) => {
    const path = `banks/${bankId}/customers`;
    return apiCallWithCustomBody<API.Transaction, CustomerBody>(
      config,
      path,
      methodCall
    );
  };

/**
 * Returns an anonymous function for creating or getting Customer data.
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
export const Customer: APIRequest<API.Customer> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) => {
    return apiCallWithCustomURIPath<API.Customer>(config, methodCall);
  },
  create: (
    config: APIClientConfig,
    methodCall: (
      config: APIClientConfig,
      path: string,
      body: CustomerBody
    ) => Promise<any>
  ) => {
    return apiCallWithCustomURIPath<API.Customer>(config, methodCall);
  },
};
