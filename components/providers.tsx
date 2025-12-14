"use client"

import React, {useState} from 'react'
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {RealtimeProvider} from "@upstash/realtime/client";

export const Providers = ({children}:{children:React.ReactNode}) => {
    const [queryClient] = useState(()=> new QueryClient())

    return (
        <RealtimeProvider>
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
    </RealtimeProvider>
    )
}
