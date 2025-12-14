"use client"
import React, {useEffect, useState} from 'react'
import {nanoid} from "nanoid";
import {useMutation} from "@tanstack/react-query";
import {client} from "@/lib/client";

const ANIMALS = [
    "wolf",
    "hawk",
    "shark",
    "bear",
    "eagle"
]

const STORAGE_KEY = "chat_username"
const generateUsername = () => {
    const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)]
    return `anonymous-${word}-${nanoid(5)}`
}

const Page = () => {

    const [username, setUsername] = useState("")

    useEffect(() => {
        const main = () => {
            const stored = localStorage.getItem(STORAGE_KEY)

            if(stored){
                setUsername(stored)
                return
            }

            const generated = generateUsername()
            localStorage.setItem(STORAGE_KEY, generated)
            setUsername(generated)
        }

        main()
    }, []);

    const {mutate: createRoom} = useMutation({
        mutationFn: async () => {
            const res = await client.room.create.post()
        }
    })

    return (
        <main className={"flex min-h-screen flex-col items-center justify-center p-4"}>
            <div className={"w-full max-w-md space-y-8"}>
                <div className={"text-center space-y-2"}>
                    <h1 className={"text-2xl font-bold tracking-tight text-green-500"}>
                        {">"} private_chat
                    </h1>
                    <p className={"text-zinc-500 text-sm"}>A private, self-destructing chat room</p>
                </div>
                <div className={'border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md'}>
                    <div className={"space-y-5"}>
                        <div className={"space-y-2"}>
                            <label className={"flex items-center text-zinc-500"}>
                                Your Identity
                            </label>
                            <div className={"flex items-centergap-3"}>
                                <div className={"flex-1 bg-zinc-950 border border-zinc-800 p-3 text-sm text-zinc-400 font-mono"}>
                                    {username}
                                </div>
                            </div>
                        </div>

                        <button onClick={()=> createRoom()} className={"w-full bg-zinc-100 text-black p-3 text-sm font-bold hover:bg-zinc-50 hover:text-black transition-colors mt-2 cursor-pointer disabled:opacity-50"}>
                            CREATE SECURE ROOM
                        </button>

                    </div>
                </div>
            </div>
        </main>
    )
}
export default Page
