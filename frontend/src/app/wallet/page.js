"use client"
import Transactions from "@/components/transactions"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Wallet() {
    const [walletAmount, setwalletAmount] = useState(5)
    const transactions = [
        {
            date: "15/02/2025, 9:00 PM",
            amount: "$5.00",
            recipient: "Tommy (Daily Goal)",
            topUp: false,
        },
        {
            date: "14/02/2025, 7:22 PM",
            amount: "$40.00",
            recipient: "Me (Top Up)",
            topUp: true,
        },
        {
            date: "13/02/2025, 9:00 PM",
            amount: "$5.00",
            recipient: "Tommy (Weekly bonus)",
            topUp: false,
        },
        {
            date: "11/02/2025, 9:00 PM",
            amount: "$5.00",
            recipient: "Tommy (Daily Goal)",
            topUp: false,
        },
        {
            date: "10/02/2025, 9:00 PM",
            amount: "$5.00",
            recipient: "Tommy (Daily Goal)",
            topUp: false,
        },
        {
            date: "09/02/2025, 9:00 PM",
            amount: "$5.00",
            recipient: "Tommy (Daily Goal)",
            topUp: false,
        },
        
    ]

    return (
        <div className="mt-12 ml-10 w-full">
            <div id="balance" className="border w-3/4 p-5 rounded-lg shadow-md flex flex-col">
                <div>
                    <h1 className="text-3xl font-semibold "> Balance </h1>
                </div>
                <div className="mt-8 text-5xl font-extrabold flex flex-row">
                    $ {walletAmount.toFixed(2)}
                    <Button variant="outline" className="ml-auto bg-black text-white self-end"> Top-Up </Button>
                </div>
            </div>            
            <div id="history" className="mt-10 mb-6 border w-3/4 p-5 rounded-lg shadow-md flex flex-col">
                <Transactions transactions={transactions} />
            </div>
        </div>
    )
}