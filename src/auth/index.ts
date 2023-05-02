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

import oauth from "oauth";

/**
 * Alias for OAuthConfig properties.
 * @type {Object}
 *
 * @Property {string} baseUri
 * @Property {string} consumerKey
 * @Property {string} consumerSecret
 * @Property {string} redirectUrl
 * @Property {{key: string, secret: string}} [token]
 * @Property {string} [oauthVerifier]
 *
 * @public
 */
export type OAuthConfig = {
  baseUri?: string;
  consumerKey: string;
  consumerSecret: string;
  redirectUrl: string;
  accessToken?: {
    key: string;
    secret: string;
  };
};

/**
 * Create OAuth.
 *
 * @returns An oauth.OAuth instance
 *
 * @public
 */
export class OAuth {
  private instance: oauth.OAuth;
  private config: OAuthConfig;
  constructor(config: OAuthConfig) {
    this.config = config;
    const headers = {
      Accept: "*/*",
      Connection: "close",
      "User-Agent": "Node authentication",
    };
    this.instance = new oauth.OAuth(
      config.baseUri + "/oauth/initiate",
      config.baseUri + "/oauth/token",
      config.consumerKey,
      config.consumerSecret,
      "1.0",
      config.redirectUrl,
      "HMAC-SHA1",
      32,
      headers
    );
  }

  /**
   * Get oauth.OAuth instance.
   *
   * @returns An oauth.OAuth value
   *
   * @public
   */
  get(): oauth.OAuth {
    return this.instance;
  }

  /**
   * Get OAuthConfig object.
   *
   * @returns An OAuthConfig value
   *
   * @public
   */
  configs(): OAuthConfig {
    return this.config;
  }

  /**
   * Get the Oauth authentication header.
   *
   * @param pathUri - The the relative path of the URL.
   * @param method - The http method.
   * @returns An OAuthConfig value
   *
   * @public
   */
  authHeader(pathUri: string, method: string): string {
    if (!this.config.accessToken) console.warn("Access token is not set.");

    if (this.config.accessToken) {
      return this.instance.authHeader(
        pathUri,
        this.config.accessToken.key,
        this.config.accessToken.secret,
        method
      );
    } else {
      return "";
    }
  }
}
