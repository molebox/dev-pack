import React from 'react'
import UserProvider from './src/context/user-context'

export const wrapRootElement = ({element}) => (
    <UserProvider>
        {element}
    </UserProvider>
)