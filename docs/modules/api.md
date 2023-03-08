[obp-typescript](../README.md) / [Modules](../modules.md) / api

# Module: api

## Table of contents

### Enumerations

- [API](../enums/api.API.md)
- [Version](../enums/api.Version.md)

### Type Aliases

- [APIClientConfig](api.md#apiclientconfig)
- [APIRequest](api.md#apirequest)
- [DirectLoginAuthentication](api.md#directloginauthentication)
- [MethodCall](api.md#methodcall)
- [TransactionRequestAccountBody](api.md#transactionrequestaccountbody)

### Variables

- [Account](api.md#account)
- [Bank](api.md#bank)
- [Customer](api.md#customer)
- [KYC](api.md#kyc)
- [Metadata](api.md#metadata)
- [Transaction](api.md#transaction)
- [User](api.md#user)

### Functions

- [CreateTransactionRequestAccount](api.md#createtransactionrequestaccount)
- [Current](api.md#current)
- [GetAccountsByBankId](api.md#getaccountsbybankid)
- [GetBanks](api.md#getbanks)
- [GetBanksById](api.md#getbanksbyid)
- [GetCustomersAtAnyBank](api.md#getcustomersatanybank)
- [GetCustomersAtBank](api.md#getcustomersatbank)
- [GetKYCStatus](api.md#getkycstatus)
- [GetTagsOnAccount](api.md#gettagsonaccount)
- [GetTransactionsForAccountFull](api.md#gettransactionsforaccountfull)
- [create](api.md#create)
- [get](api.md#get)

## Type Aliases

### APIClientConfig

Ƭ **APIClientConfig**: `Object`

Alias for APIClientConfig properties.

**`Property`**

baseUri

**`Property`**

version

**`Property`**

authentication

**`Property`**

[token]

**`See`**

 - [Version](../enums/api.Version.md)
 - [DirectLoginAuthentication](api.md#directloginauthentication)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authentication` | [`DirectLoginAuthentication`](api.md#directloginauthentication) |
| `baseUri` | `string` |
| `token?` | `string` |
| `version` | [`Version`](../enums/api.Version.md) |

#### Defined in

[api/client.ts:58](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/client.ts#L58)

___

### APIRequest

Ƭ **APIRequest**<`T`\>: `Object`

Alias for APIRequest properties.

**`Property`**

[get]

**`Property`**

[create]

**`See`**

 - [APIClientConfig](api.md#apiclientconfig)
 - [MethodCall](api.md#methodcall)

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of object |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create?` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `methodCall`: [`MethodCall`](api.md#methodcall)<`T`\>) => `any` |
| `get?` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `methodCall`: [`MethodCall`](api.md#methodcall)<`T`\>) => `any` |

#### Defined in

[api/client.ts:97](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/client.ts#L97)

___

### DirectLoginAuthentication

Ƭ **DirectLoginAuthentication**: `Object`

Alias for DirectLogin properties.

**`Property`**

username

**`Property`**

passowrd

**`Property`**

consumerKey

#### Type declaration

| Name | Type |
| :------ | :------ |
| `consumerKey` | `string` |
| `password` | `string` |
| `username` | `string` |

#### Defined in

[api/client.ts:38](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/client.ts#L38)

___

### MethodCall

Ƭ **MethodCall**<`T`\>: (`config`: [`APIClientConfig`](api.md#apiclientconfig), `path`: `string`, `body?`: `any`) => `Promise`<`T`\>

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of object |

#### Type declaration

▸ (`config`, `path`, `body?`): `Promise`<`T`\>

Alias for HTTP MethodCall properties.

**`Property`**

config

**`Property`**

path

**`Property`**

[body]

**`See`**

APIClientConfig

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) |
| `path` | `string` |
| `body?` | `any` |

##### Returns

`Promise`<`T`\>

#### Defined in

[api/client.ts:78](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/client.ts#L78)

___

### TransactionRequestAccountBody

Ƭ **TransactionRequestAccountBody**: `Object`

Alias for TransactionRequestAccountBody properties.

**`Property`**

description

**`Property`**

to

**`Property`**

value

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `to` | { `account_id`: `string` ; `bank_id`: `string`  } |
| `to.account_id` | `string` |
| `to.bank_id` | `string` |
| `value` | { `amount`: `number` ; `currency`: `string`  } |
| `value.amount` | `number` |
| `value.currency` | `string` |

#### Defined in

[api/transaction.ts:18](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/transaction.ts#L18)

## Variables

### Account

• `Const` **Account**: [`APIRequest`](api.md#apirequest)<[`Account`](../enums/api.API.md#account)\>

Returns an anonymous function for creating or getting an Account data.

**`Param`**

The APIClientConfig object

**`Param`**

A higher order function

**`See`**

 - [APIClientConfig](api.md#apiclientconfig)
 - [APIRequest](api.md#apirequest)

#### Defined in

[api/account.ts:42](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/account.ts#L42)

___

### Bank

• `Const` **Bank**: [`APIRequest`](api.md#apirequest)<[`Bank`](../enums/api.API.md#bank)\>

Returns an anonymous function for creating or getting Bank data.

**`Param`**

The APIClientConfig object

**`Param`**

A higher order function

**`See`**

 - [APIClientConfig](api.md#apiclientconfig)
 - [APIRequest](api.md#apirequest)

#### Defined in

[api/bank.ts:61](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/bank.ts#L61)

___

### Customer

• `Const` **Customer**: [`APIRequest`](api.md#apirequest)<[`Customer`](../enums/api.API.md#customer)\>

Returns an anonymous function for creating or getting Customer data.

**`Param`**

The APIClientConfig object

**`Param`**

A higher order function

**`See`**

 - [APIClientConfig](api.md#apiclientconfig)
 - [APIRequest](api.md#apirequest)

#### Defined in

[api/customer.ts:147](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/customer.ts#L147)

___

### KYC

• `Const` **KYC**: [`APIRequest`](api.md#apirequest)<[`KYC`](../enums/api.API.md#kyc)\>

Returns an anonymous function for creating or getting KYC data.

**`Param`**

The APIClientConfig object

**`Param`**

A higher order function

**`See`**

 - [APIClientConfig](api.md#apiclientconfig)
 - [APIRequest](api.md#apirequest)

#### Defined in

api/kyc.ts:40

___

### Metadata

• `Const` **Metadata**: [`APIRequest`](api.md#apirequest)<[`Metadata`](../enums/api.API.md#metadata)\>

Returns an anonymous function for creating or getting Metadata data.

**`Param`**

The APIClientConfig object

**`Param`**

A higher order function

**`See`**

 - [APIClientConfig](api.md#apiclientconfig)
 - [APIRequest](api.md#apirequest)

#### Defined in

api/metadata.ts:43

___

### Transaction

• `Const` **Transaction**: [`APIRequest`](api.md#apirequest)<[`Transaction`](../enums/api.API.md#transaction)\>

Returns an anonymous function for creating or getting Transaction data.

**`Param`**

The APIClientConfig object

**`Param`**

A higher order function

**`See`**

 - [APIClientConfig](api.md#apiclientconfig)
 - [APIRequest](api.md#apirequest)

#### Defined in

[api/transaction.ts:97](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/transaction.ts#L97)

___

### User

• `Const` **User**: [`APIRequest`](api.md#apirequest)<[`User`](../enums/api.API.md#user)\>

Returns an anonymous function for creating or getting a User data.

**`Param`**

The APIClientConfig object

**`Param`**

A higher order function

**`See`**

 - [APIClientConfig](api.md#apiclientconfig)
 - [APIRequest](api.md#apirequest)

#### Defined in

[api/user.ts:39](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/user.ts#L39)

## Functions

### CreateTransactionRequestAccount

▸ **CreateTransactionRequestAccount**(`config`, `methodCall`): (`bankId`: `string`, `accountId`: `string`, `viewId`: `string`, `account`: `string`) => (`body`: [`TransactionRequestAccountBody`](api.md#transactionrequestaccountbody)) => `Promise`<[`Transaction`](../enums/api.API.md#transaction)\>

Create Transaction Request (ACCOUNT).

**`See`**

 - [APIClientConfig](api.md#apiclientconfig)
 - [TransactionRequestAccountBody](api.md#transactionrequestaccountbody)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `path`: `string`, `body`: [`TransactionRequestAccountBody`](api.md#transactionrequestaccountbody)) => `Promise`<`any`\> | A higher order function |

#### Returns

`fn`

A curried function

▸ (`bankId`, `accountId`, `viewId`, `account`): (`body`: [`TransactionRequestAccountBody`](api.md#transactionrequestaccountbody)) => `Promise`<[`Transaction`](../enums/api.API.md#transaction)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `bankId` | `string` |
| `accountId` | `string` |
| `viewId` | `string` |
| `account` | `string` |

##### Returns

`fn`

▸ (`body`): `Promise`<[`Transaction`](../enums/api.API.md#transaction)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`TransactionRequestAccountBody`](api.md#transactionrequestaccountbody) |

##### Returns

`Promise`<[`Transaction`](../enums/api.API.md#transaction)\>

#### Defined in

[api/transaction.ts:69](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/transaction.ts#L69)

___

### Current

▸ **Current**(`config`, `methodCall`): `Promise`<[`User`](../enums/api.API.md#user)\>

Get the logged in user
Returns information about the logged in user.

**`See`**

[APIClientConfig](api.md#apiclientconfig)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `path`: `string`) => `Promise`<[`User`](../enums/api.API.md#user)\> | A higher order function |

#### Returns

`Promise`<[`User`](../enums/api.API.md#user)\>

A curried function

#### Defined in

[api/user.ts:20](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/user.ts#L20)

___

### GetAccountsByBankId

▸ **GetAccountsByBankId**(`config`, `methodCall`): (`id`: `string`) => `Promise`<[`Account`](../enums/api.API.md#account)\>

Get Accounts at Bank.
Returns the list of accounts at BANK_ID that the user has access to.

**`See`**

[APIClientConfig](api.md#apiclientconfig)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `path`: `string`) => `Promise`<[`Account`](../enums/api.API.md#account)\> | A higher order function |

#### Returns

`fn`

A curried function

▸ (`id`): `Promise`<[`Account`](../enums/api.API.md#account)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

##### Returns

`Promise`<[`Account`](../enums/api.API.md#account)\>

#### Defined in

[api/account.ts:21](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/account.ts#L21)

___

### GetBanks

▸ **GetBanks**(`config`, `methodCall`): `Promise`<`any`\>

Get banks on this API instance.
Returns a list of banks.

**`See`**

[APIClientConfig](api.md#apiclientconfig)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `path`: `string`) => `Promise`<`any`\> | A higher order function |

#### Returns

`Promise`<`any`\>

A curried function

#### Defined in

[api/bank.ts:42](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/bank.ts#L42)

___

### GetBanksById

▸ **GetBanksById**(`config`, `methodCall`): (`id`: `string`) => `Promise`<[`Account`](../enums/api.API.md#account)\>

Get the bank specified by BANK_ID.
Returns information about a single bank specified by BANK_ID.

**`See`**

[APIClientConfig](api.md#apiclientconfig)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `path`: `string`) => `Promise`<`any`\> | A higher order function |

#### Returns

`fn`

A curried function

▸ (`id`): `Promise`<[`Account`](../enums/api.API.md#account)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

##### Returns

`Promise`<[`Account`](../enums/api.API.md#account)\>

#### Defined in

[api/bank.ts:21](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/bank.ts#L21)

___

### GetCustomersAtAnyBank

▸ **GetCustomersAtAnyBank**(`config`, `methodCall`): `Promise`<`any`\>

Get Customers at Any Bank.

**`See`**

[APIClientConfig](api.md#apiclientconfig)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `path`: `string`) => `Promise`<`any`\> | A higher order function |

#### Returns

`Promise`<`any`\>

A curried function

#### Defined in

[api/customer.ts:74](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/customer.ts#L74)

___

### GetCustomersAtBank

▸ **GetCustomersAtBank**(`config`, `methodCall`): (`bankId`: `string`) => `Promise`<[`Customer`](../enums/api.API.md#customer)\>

Get Customers at Bank.

**`See`**

[APIClientConfig](api.md#apiclientconfig)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `path`: `string`) => `Promise`<`any`\> | A higher order function |

#### Returns

`fn`

A curried function

▸ (`bankId`): `Promise`<[`Customer`](../enums/api.API.md#customer)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `bankId` | `string` |

##### Returns

`Promise`<[`Customer`](../enums/api.API.md#customer)\>

#### Defined in

[api/customer.ts:93](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/customer.ts#L93)

___

### GetKYCStatus

▸ **GetKYCStatus**(`config`, `methodCall`): (`customerId`: `string`) => `Promise`<`any`\>

Get the KYC statuses for a customer specified by CUSTOMER_ID over time.

**`See`**

[APIClientConfig](api.md#apiclientconfig)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `path`: `string`) => `Promise`<`any`\> | A higher order function |

#### Returns

`fn`

A curried function

▸ (`customerId`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `customerId` | `string` |

##### Returns

`Promise`<`any`\>

#### Defined in

api/kyc.ts:20

___

### GetTagsOnAccount

▸ **GetTagsOnAccount**(`config`, `methodCall`): (`bankId`: `string`, `accountId`: `string`, `viewId`: `string`) => `Promise`<`any`\>

Returns the account ACCOUNT_ID tags made on a view (VIEW_ID).

**`See`**

[APIClientConfig](api.md#apiclientconfig)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `path`: `string`) => `Promise`<`any`\> | A higher order function |

#### Returns

`fn`

A curried function

▸ (`bankId`, `accountId`, `viewId`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `bankId` | `string` |
| `accountId` | `string` |
| `viewId` | `string` |

##### Returns

`Promise`<`any`\>

#### Defined in

api/metadata.ts:20

___

### GetTransactionsForAccountFull

▸ **GetTransactionsForAccountFull**(`config`, `methodCall`): (`bankId`: `string`, `accountId`: `string`, `viewId`: `string`) => `Promise`<[`Account`](../enums/api.API.md#account)\>

Get Transactions for Account (Full).
Returns transactions list of the account specified by ACCOUNT_ID and moderated by the view (VIEW_ID).

**`See`**

[APIClientConfig](api.md#apiclientconfig)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](api.md#apiclientconfig), `path`: `string`) => `Promise`<`any`\> | A higher order function |

#### Returns

`fn`

A curried function

▸ (`bankId`, `accountId`, `viewId`): `Promise`<[`Account`](../enums/api.API.md#account)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `bankId` | `string` |
| `accountId` | `string` |
| `viewId` | `string` |

##### Returns

`Promise`<[`Account`](../enums/api.API.md#account)\>

#### Defined in

[api/transaction.ts:43](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/transaction.ts#L43)

___

### create

▸ **create**<`T`\>(`config`, `request`): `any`

A POST request function that creates an API data and returns the result.

**`See`**

 - APIClientConfig
 - APIRequest<T>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `request` | [`APIRequest`](api.md#apirequest)<`T`\> | The APIRequest object |

#### Returns

`any`

An

#### Defined in

[api/client.ts:303](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/client.ts#L303)

___

### get

▸ **get**<`T`\>(`config`, `request`): `any`

A GET request function that returns the API data.

**`See`**

 - APIClientConfig
 - APIRequest<T>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](api.md#apiclientconfig) | The APIClientConfig object |
| `request` | [`APIRequest`](api.md#apirequest)<`T`\> | The APIRequest object |

#### Returns

`any`

An

#### Defined in

[api/client.ts:284](https://github.com/mark-tesobe/OBP-SDK/blob/92f681c/src/api/client.ts#L284)
