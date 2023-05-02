[obp-typescript](../README.md) / [Modules](../modules.md) / [auth](../modules/auth.md) / OAuth

# Class: OAuth

[auth](../modules/auth.md).OAuth

Create OAuth.

## Table of contents

### Constructors

- [constructor](auth.OAuth.md#constructor)

### Properties

- [config](auth.OAuth.md#config)
- [instance](auth.OAuth.md#instance)

### Methods

- [authHeader](auth.OAuth.md#authheader)
- [configs](auth.OAuth.md#configs)
- [get](auth.OAuth.md#get)

## Constructors

### constructor

• **new OAuth**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`OAuthConfig`](../modules/auth.md#oauthconfig) |

#### Defined in

[auth/index.ts:62](https://github.com/mark-tesobe/OBP-TypeScript/blob/bd9b673/src/auth/index.ts#L62)

## Properties

### config

• `Private` **config**: [`OAuthConfig`](../modules/auth.md#oauthconfig)

#### Defined in

[auth/index.ts:61](https://github.com/mark-tesobe/OBP-TypeScript/blob/bd9b673/src/auth/index.ts#L61)

___

### instance

• `Private` **instance**: `OAuth`

#### Defined in

[auth/index.ts:60](https://github.com/mark-tesobe/OBP-TypeScript/blob/bd9b673/src/auth/index.ts#L60)

## Methods

### authHeader

▸ **authHeader**(`pathUri`, `method`): `string`

Get the Oauth authentication header.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pathUri` | `string` | The the relative path of the URL. |
| `method` | `string` | The http method. |

#### Returns

`string`

An OAuthConfig value

#### Defined in

[auth/index.ts:113](https://github.com/mark-tesobe/OBP-TypeScript/blob/bd9b673/src/auth/index.ts#L113)

___

### configs

▸ **configs**(): [`OAuthConfig`](../modules/auth.md#oauthconfig)

Get OAuthConfig object.

#### Returns

[`OAuthConfig`](../modules/auth.md#oauthconfig)

An OAuthConfig value

#### Defined in

[auth/index.ts:100](https://github.com/mark-tesobe/OBP-TypeScript/blob/bd9b673/src/auth/index.ts#L100)

___

### get

▸ **get**(): `OAuth`

Get oauth.OAuth instance.

#### Returns

`OAuth`

An oauth.OAuth value

#### Defined in

[auth/index.ts:89](https://github.com/mark-tesobe/OBP-TypeScript/blob/bd9b673/src/auth/index.ts#L89)
