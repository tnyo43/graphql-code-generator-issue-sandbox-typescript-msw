import * as Types from './types';

import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
export type UserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, email: string } };


/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUserQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ user })
 *   )
 * })
 */
export const mockUserQuery = (resolver: ResponseResolver<GraphQLRequest<Types.UserQueryVariables>, GraphQLContext<Types.UserQuery>, any>) =>
  graphql.query<Types.UserQuery, Types.UserQueryVariables>(
    'user',
    resolver
  )
