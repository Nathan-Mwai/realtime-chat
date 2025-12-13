"use client"

import React, {useState} from 'react'
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

export const Providers = ({children}:{children:React.ReactNode}) => {
    const [queryClient] = useState(()=> new QueryClient())

    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}
