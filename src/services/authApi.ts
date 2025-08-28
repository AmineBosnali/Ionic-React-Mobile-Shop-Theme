import { createApi, fetchBaseQuery, FetchBaseQueryError, BaseQueryApi, FetchBaseQueryMeta, FetchArgs } from '@reduxjs/toolkit/query/react';
import { login, logout } from './authService';
type MaybePromise<T> = T | Promise<T>;
import { QueryReturnValue } from '@reduxjs/toolkit/query/react';

interface AuthResponse {
  email: string;
  uid: string;
  idToken: string;
  refreshToken: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api', credentials: 'include' }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      queryFn: async (credentials: LoginRequest, api: BaseQueryApi, extraOptions: {}, baseQuery: (arg: string | FetchArgs) => MaybePromise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>) => {
        try {
          const user = await login(credentials.email, credentials.password);
          return { data: user } as QueryReturnValue<AuthResponse, FetchBaseQueryError, FetchBaseQueryMeta>;
        } catch (error: any) {
          return {
            error: {
              status: 'CUSTOM_ERROR',
              error: error.message
            }
          } as QueryReturnValue<AuthResponse, FetchBaseQueryError, FetchBaseQueryMeta>;
        }
      },
    }),
    logout: builder.mutation<void, void>({
      queryFn: async (_, api: BaseQueryApi, extraOptions: {}, baseQuery: (arg: string | FetchArgs) => MaybePromise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>) => {
        try {
          await logout();
          return { data: undefined } as QueryReturnValue<undefined, FetchBaseQueryError, FetchBaseQueryMeta>;
        } catch (error: any) {
          return {
            error: {
              status: 'CUSTOM_ERROR',
              error: error.message
            }
          } as QueryReturnValue<void, FetchBaseQueryError, FetchBaseQueryMeta>;
        }
      },
    }),
    getProtected: builder.query<AuthResponse, void>({
      query: () => 'protected',
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetProtectedQuery } = authApi;
