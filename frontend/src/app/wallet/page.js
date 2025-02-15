"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Wallet() {
    const [walletAmount, setwalletAmount] = useState(5)

    return (
        <div className="mt-10 ml-10 w-full">
            <div id="balance" className="border w-3/4 p-5 rounded-lg shadow-md flex flex-col">
                <div>
                    <h1 className="text-3xl font-semibold "> Balance </h1>
                </div>
                <div className="mt-8 text-5xl font-extrabold flex flex-row">
                    $ {walletAmount.toFixed(2)}
                    <Button variant="outline" className="ml-auto bg-black text-white self-end"> Top-Up </Button>
                </div>
            </div>
        </div>
    )
}