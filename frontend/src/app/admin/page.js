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
    const [notEditable, setNotEditable] = useState(true)

    function updatePlan(key, value) {
        setPlan((prev) => ({ ...prev, [key]: value }));
        console.log(plan)
    }

    function updateDetails(key, value) {
        setchildDetails((prev) => ({ ...prev, [key]: value }));
    }


    return (
        <div className="flex flex-col mt-10">
            <div>
                <h1 className="text-xl font-bold"> {childDetails.childName} </h1>
            </div>
            <div id="daily" className="mt-10 grid grid-rows-5">
                <div className="grid grid-cols-2">
                    <label className="self-center">
                        {"Daily Limit: " + plan.dailyLimit + " hours"}
                    </label>
                    <Slider
                        max={24}
                        className="w-full"
                        value={[plan.dailyLimit]}
                        onValueChange={(val) => updatePlan("dailyLimit", val[0])}
                    />
                </div>
                <Separator className="mt-5 mb-5" />
                <div className="grid grid-cols-2">
                    <label className="self-center">
                        Wallet Address
                    </label>
                    <Input type="walletAddress" placeholder="New Wallet Address" className="w-full" disabled={notEditable} value={childDetails.walletAddress} onChange={(val) => updateDetails("walletAddress", val[0])} />
                </div>
                <div className="grid grid-cols-2">
                    <label className="self-center">
                        Daily Cash
                    </label>
                    <Input type="number" value={plan.cashAmount} onChange={(val) => updatePlan("cashAmount", val[0])} />
                </div>
                <div className="grid grid-cols-2">
                    <label className="w-3/4 self-center">
                        Donation (%)
                    </label>
                    <Input type="number" value={plan.donationPercent} onChange={(val) => updatePlan("donationPercent", val[0])} />
                </div>
            </div>
            <div id="weeklyMonthly" className="grid grid-rows-3">
                <Separator className="mt-10 mb-5" />
                <div id="weeklyBonus" className="grid grid-rows-2 gap-2">
                    <div className="grid grid-cols-2">
                        <label>
                            Weekly Bonus
                        </label>
                        <Checkbox id="weeklyBonus" checked={plan.weeklyBonus} onCheckedChange={(val) => updatePlan("weeklyBonus", val)} />
                    </div>
                    <div className="grid grid-cols-2">
                        <label className="self-center">
                            Weekly Cash
                        </label>
                        <Input type="number" value={plan.weeklyAmount} onChange={(val) => updatePlan("weeklyAmount", val[0])} />
                    </div>
                </div>
                <div id="monthlyBonus" className="grid grid-rows-2 gap-2 mt-5">
                    <div className="grid grid-cols-2">
                        <label>
                            Monthly Bonus
                        </label>
                        <Checkbox id="monthlyBonus" checked={plan.monthlyBonus} onCheckedChange={(val) => updatePlan("monthlyBonus", val)} />
                    </div>
                    <div className="grid grid-cols-2">
                        <label className="self-center">
                            Monthly Cash
                        </label>
                        <Input type="number" value={plan.weeklyAmount} onChange={(val) => updatePlan("monthlyAmount", val[0])} />
                    </div>
                </div>
            </div >
            <Button className="mt-5 bg-green-400" variant="outline" onClick={() => setNotEditable(true)}> Save </Button>
        </div >


    );
}
