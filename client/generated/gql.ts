import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreatePageInput = {
  source: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPage: Page;
};


export type MutationCreatePageArgs = {
  input: CreatePageInput;
};

export type Page = {
  __typename?: 'Page';
  bodyHtml: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  answer: Scalars['Int']['output'];
  page?: Maybe<Page>;
  pageByTitle?: Maybe<Page>;
};


export type QueryRootPageArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRootPageByTitleArgs = {
  title: Scalars['String']['input'];
};

export type CreatePageMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePageMutation = { __typename?: 'Mutation', createPage: { __typename?: 'Page', id: number } };

export type GetPageByTitleQueryVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type GetPageByTitleQuery = { __typename?: 'QueryRoot', pageByTitle?: { __typename?: 'Page', id: number, title: string, bodyHtml: string } | null };


export const CreatePageDocument = gql`
    mutation createPage {
  createPage(input: {title: "The Test Page", source: "# The Test Page"}) {
    id
  }
}
    `;
export type CreatePageMutationFn = Apollo.MutationFunction<CreatePageMutation, CreatePageMutationVariables>;

/**
 * __useCreatePageMutation__
 *
 * To run a mutation, you first call `useCreatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPageMutation, { data, loading, error }] = useCreatePageMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreatePageMutation(baseOptions?: Apollo.MutationHookOptions<CreatePageMutation, CreatePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePageMutation, CreatePageMutationVariables>(CreatePageDocument, options);
      }
export type CreatePageMutationHookResult = ReturnType<typeof useCreatePageMutation>;
export type CreatePageMutationResult = Apollo.MutationResult<CreatePageMutation>;
export type CreatePageMutationOptions = Apollo.BaseMutationOptions<CreatePageMutation, CreatePageMutationVariables>;
export const GetPageByTitleDocument = gql`
    query getPageByTitle($title: String!) {
  pageByTitle(title: $title) {
    id
    title
    bodyHtml
  }
}
    `;

/**
 * __useGetPageByTitleQuery__
 *
 * To run a query within a React component, call `useGetPageByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useGetPageByTitleQuery(baseOptions: Apollo.QueryHookOptions<GetPageByTitleQuery, GetPageByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageByTitleQuery, GetPageByTitleQueryVariables>(GetPageByTitleDocument, options);
      }
export function useGetPageByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageByTitleQuery, GetPageByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageByTitleQuery, GetPageByTitleQueryVariables>(GetPageByTitleDocument, options);
        }
export type GetPageByTitleQueryHookResult = ReturnType<typeof useGetPageByTitleQuery>;
export type GetPageByTitleLazyQueryHookResult = ReturnType<typeof useGetPageByTitleLazyQuery>;
export type GetPageByTitleQueryResult = Apollo.QueryResult<GetPageByTitleQuery, GetPageByTitleQueryVariables>;

export const CreatePageDocument = gql`
    mutation createPage {
  createPage(input: {title: "The Test Page", source: "# The Test Page"}) {
    id
  }
}
    `;
export const GetPageByTitleDocument = gql`
    query getPageByTitle($title: String!) {
  pageByTitle(title: $title) {
    id
    title
    bodyHtml
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createPage(variables?: CreatePageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreatePageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePageMutation>(CreatePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createPage', 'mutation');
    },
    getPageByTitle(variables: GetPageByTitleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPageByTitleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageByTitleQuery>(GetPageByTitleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPageByTitle', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;