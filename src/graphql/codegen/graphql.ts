/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type GqlAddress = {
  __typename?: 'GqlAddress';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  street: Scalars['String']['output'];
  zipCode: Scalars['String']['output'];
};

export type GqlAuthOutput = {
  __typename?: 'GqlAuthOutput';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  joinDate: Scalars['DateTime']['output'];
  lastName: Scalars['String']['output'];
  role: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type GqlCategory = {
  __typename?: 'GqlCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GqlCategoryWithProducts = {
  __typename?: 'GqlCategoryWithProducts';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<GqlProduct>;
};

export type GqlLoggedUser = {
  __typename?: 'GqlLoggedUser';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  joinDate: Scalars['DateTime']['output'];
  lastName: Scalars['String']['output'];
  role: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type GqlNewAddressOutput = {
  __typename?: 'GqlNewAddressOutput';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  street: Scalars['String']['output'];
  zipCode: Scalars['String']['output'];
};

export type GqlNewOrderedItem = {
  idProduct: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type GqlOrder = {
  __typename?: 'GqlOrder';
  createdAt: Scalars['DateTime']['output'];
  creditCardNumber: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  idCreditCard: Scalars['ID']['output'];
  idUser: Scalars['ID']['output'];
  items: Array<GqlOrderedItem>;
};

export type GqlOrderedItem = {
  __typename?: 'GqlOrderedItem';
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
};

export type GqlPaginatedProductsInput = {
  availableStock?: InputMaybe<Scalars['Boolean']['input']>;
  categoriesIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  direction?: InputMaybe<SortDirection>;
  field?: InputMaybe<SortField>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceCondition?: InputMaybe<NumberCondition>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type GqlPaginatedProductsOutput = {
  __typename?: 'GqlPaginatedProductsOutput';
  data: Array<GqlProductWithCategory>;
  hasMoreData: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
};

export type GqlPartialCreditCard = {
  __typename?: 'GqlPartialCreditCard';
  expires: Scalars['String']['output'];
  number: Scalars['String']['output'];
};

export type GqlPartialOrderedItem = {
  __typename?: 'GqlPartialOrderedItem';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
};

export type GqlPlaceOrderInput = {
  cvc: Scalars['String']['input'];
  expires: Scalars['String']['input'];
  name: Scalars['String']['input'];
  number: Scalars['String']['input'];
};

export type GqlPlaceOrderOutput = {
  __typename?: 'GqlPlaceOrderOutput';
  orderId: Scalars['Int']['output'];
};

export type GqlProduct = {
  __typename?: 'GqlProduct';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  idCategory: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  stock: Scalars['Int']['output'];
};

export type GqlProductWithCategory = {
  __typename?: 'GqlProductWithCategory';
  category: GqlCategory;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  idCategory: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  stock: Scalars['Int']['output'];
};

export type GqlUserOrder = {
  __typename?: 'GqlUserOrder';
  createdAt: Scalars['DateTime']['output'];
  creditCard: GqlPartialCreditCard;
  items: Array<GqlPartialOrderedItem>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: GqlNewAddressOutput;
  login: GqlAuthOutput;
  placeOrder: GqlPlaceOrderOutput;
  signup: GqlAuthOutput;
};


export type MutationCreateAddressArgs = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  street: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationPlaceOrderArgs = {
  creditCard: GqlPlaceOrderInput;
  orderedItems: Array<GqlNewOrderedItem>;
};


export type MutationSignupArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum NumberCondition {
  Gte = 'gte',
  Lte = 'lte'
}

export type Query = {
  __typename?: 'Query';
  categories: Array<GqlCategoryWithProducts>;
  category: GqlCategoryWithProducts;
  getOrder: GqlUserOrder;
  me: GqlLoggedUser;
  myAddresses: Array<GqlAddress>;
  myOrders: Array<GqlOrder>;
  product: GqlProductWithCategory;
  products: Array<GqlProductWithCategory>;
  productsByPage: GqlPaginatedProductsOutput;
  productsWithIds: Array<GqlProductWithCategory>;
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetOrderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductsByPageArgs = {
  input: GqlPaginatedProductsInput;
};


export type QueryProductsWithIdsArgs = {
  ids: Array<Scalars['Int']['input']>;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum SortField {
  Name = 'name',
  Price = 'price'
}

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'GqlProductWithCategory', id: string, name: string, description: string, image: string }> };


export const AllProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<AllProductsQuery, AllProductsQueryVariables>;