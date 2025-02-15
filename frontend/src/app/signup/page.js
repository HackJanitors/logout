"use client"

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


export default function Admin() {
    const [userWallet, setuserWallet] = useState("FakeAddress")
    const [child, setChild] = useState({
        riotId: "addict#kid",
        username: "Tommy",
        walletAddress: "Fakeaddress",
        email: "addict@example.com",
        password: ""
    })

    function updateChildDetails(key, value) {
        setChild((prev) => ({ ...prev, [key]: value }));
    }


    return (
        <div className="flex flex-col mt-10 ml-10 w-1/3 text-lg">
            <div>
                <h1 className="text-3xl font-extrabold "> Finish Setting Up Your Account </h1>
            </div>
            <Separator className="mt-10 mb-5" />
            <div id="userInfo" className="grid grid-cols-2">
                <label>
                    Your Wallet Address
                </label>
                <Input type="text" placeholder="New Wallet Address" className="w-full" value={userWallet} onChange={(val) => setuserWallet(val[0])} />
            </div>
            <Separator className="mt-10 mb-5" />
            <div className="font-extrabold mb-10"> Your Child's Details </div>
            <div className="childInfo grid grid-rows-4 gap-5">
                <div className="grid grid-cols-2">
                    <label>
                        RiotID
                    </label>
                    <Input type="text" placeholder="Enter your child's RiotID" className="w-full" value={child.riotId} onChange={(val) => updateChildDetails("riotId", val[0])} />
                </div>
                <div className="grid grid-cols-2">
                    <label>
                        Wallet Address
                    </label>
                    <Input type="text" placeholder="Enter your child's Wallet Address" className="w-full" value={child.walletAddress} onChange={(val) => updateChildDetails("walletAddress", val[0])} />
                </div>
                <div className="grid grid-cols-2">
                    <label>
                        Username
                    </label>
                    <Input type="text" placeholder="Enter a username for your child" className="w-full" value={child.username} onChange={(val) => updateChildDetails("username", val[0])} />
                </div>
                <div className="grid grid-cols-2">
                    <label>
                        Email Address
                    </label>
                    <Input type="email" placeholder="Enter your child's Email Address" className="w-full" value={child.email} onChange={(val) => updateChildDetails("email", val[0])} />
                </div>
                <div className="grid grid-cols-2">
                    <label>
                        Password
                    </label>
                    <Input type="password" placeholder="Enter a password" className="w-full" value={child.password} onChange={(val) => updateChildDetails("password", val[0])} />
                </div>
            </div>
            <div className="mt-10 mb-10">
                <Button className="bg-green-400 w-1/2" variant="outline" asChild>
                    <Link href="/dashboard"> Next </Link>
                </Button>
            </div>
        </div >


    );
}
