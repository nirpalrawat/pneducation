import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { userLoggedIn } from '../authSlice';

const USER_API = "http://localhost:3000/api/"

export const authApi = createApi({
     reducerPath: "authApi",
     baseQuery: fetchBaseQuery({
        baseUrl:USER_API,
        credentials:'include'
     }),
     endpoints: (builder) =>({
          registerUser: builder.mutation({
             query: (inputData) =>({
                 url:"signUp",
                    method:"POST",
                    body:inputData
             })
          }),
          loginUser: builder.mutation({
            query: (inputData) =>({
                url:"signIn",
                   method:"POST",
                   body:inputData
            }),
            // async onQueryStarted(_, {queryFulfilled, dispatch}) {
            //       try{
            //            const result = await queryFulfilled;
            //            dispatch(userLoggedIn({user:result.data.user}))
            //       }
            //       catch(error){
            //         console.log(error);
            //       }
            // }
          }),
     })
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation
} = authApi;