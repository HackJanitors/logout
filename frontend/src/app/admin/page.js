"use client"

import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";


export default function Admin() {
    const [plan, setPlan] = useState({
        dailyLimit: "2",
        cashAmount: "3",
        donationPercent: "1",
        weeklyBonus: false,
        weeklyAmount: "5",
        monthlyBonus: false,
        monthlyAmount: "5",
    })
    const [childDetails, setchildDetails] = useState({
        childName: "Tommy",
        walletAddress: "Fakeaddress"
    })

    function updatePlan(key, value) {
        setPlan((prev) => ({ ...prev, [key]: value }));
    }

    function updateDetails(key, value) {
        setchildDetails((prev) => ({ ...prev, [key]: value }));
    }


    return (
        <div className="flex flex-col mt-10 ml-10 flex-grow text-lg">
            <div>
                <h1 className="text-5xl font-extrabold "> {childDetails.childName} </h1>
            </div>
            <div id="dailyLimit">
                <div className="grid grid-cols-[2fr,1fr]">
                    <Separator className="mt-10 mb-5" />
                </div>
                <div className="grid grid-cols-3">
                    <label className="self-center">
                        {"Daily Limit: " + plan.dailyLimit + " hours"}
                    </label>
                    <Slider
                        max={24}
                        value={[plan.dailyLimit]}
                        onValueChange={(val) => updatePlan("dailyLimit", val[0])}
                    />
                </div>
            </div>
            <div id="daily" className=" grid grid-rows-4">
                <div className="grid grid-cols-[2fr,1fr]">
                    <Separator className="mt-10 mb-5" />
                </div>
                <div className="grid grid-cols-3">
                    <label>
                        Wallet Address
                    </label>
                    <Input type="walletAddress" placeholder="New Wallet Address" className="w-full" value={childDetails.walletAddress} onChange={(val) => updateDetails("walletAddress", val[0])} />
                </div>
                <div className="grid grid-cols-3">
                    <label>
                        Daily Cash
                    </label>
                    <Input className="w-1/4" type="number" value={plan.cashAmount} onChange={(val) => updatePlan("cashAmount", val[0])} />
                </div>
                <div className="grid grid-cols-3">
                    <label>
                        Donation (%)
                    </label>
                    <Input className="w-1/4" type="number" value={plan.donationPercent} onChange={(val) => updatePlan("donationPercent", val[0])} />
                </div>
            </div>
            <div id="weeklyMonthly" className="grid grid-rows-3">
                <div className="grid grid-cols-[2fr,1fr]">
                    <Separator className="mt-10 mb-5" />
                </div>
                <div id="weeklyBonus" className="grid grid-rows-2 gap-2">
                    <div className="grid grid-cols-3">
                        <label>
                            Weekly Bonus
                        </label>
                        <Checkbox id="weeklyBonus" checked={plan.weeklyBonus} onCheckedChange={(val) => updatePlan("weeklyBonus", val)} />
                    </div>
                    <div className="grid grid-cols-3">
                        <label className="self-center">
                            Weekly Cash
                        </label>
                        <Input className="w-1/4" type="number" value={plan.weeklyAmount} onChange={(val) => updatePlan("weeklyAmount", val[0])} />
                    </div>
                </div>
                <div id="monthlyBonus" className="grid grid-rows-2 gap-2 mt-5">
                    <div className="grid grid-cols-3">
                        <label>
                            Monthly Bonus
                        </label>
                        <Checkbox id="monthlyBonus" checked={plan.monthlyBonus} onCheckedChange={(val) => updatePlan("monthlyBonus", val)} />
                    </div>
                    <div className="grid grid-cols-3">
                        <label className="self-center">
                            Monthly Cash
                        </label>
                        <Input className="w-1/4" type="number" value={plan.monthlyAmount} onChange={(val) => updatePlan("monthlyAmount", val[0])} />
                    </div>
                </div>
            </div >
            <div className="grid grid-cols-3 mt-10 mb-10">
                <div> </div>
                <Button className="bg-green-400 w-1/2" variant="outline"> Save </Button>
            </div>
        </div >


    );
}
