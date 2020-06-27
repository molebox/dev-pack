import React from 'react'
// const fetch =require('isomorphic-fetch');
// const {
//     ApolloProvider,
//     ApolloClient,
//     // HttpLink,
//     // InMemoryCache
// } = require('@apollo/client');
import UserProvider from './src/context/user-context';

// const client = new ApolloClient({
//   uri: 'https://serve.onegraph.com/dynamic?app_id=' + process.env.GATSBY_ONEGRAPH_APP_ID,
// });

export const wrapRootElement = ({element}) => (
    // <ApolloProvider client={client}>
        <UserProvider>
            {element}
        </UserProvider>
    // {/* </ApolloProvider> */}

)