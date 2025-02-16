"use client"

import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { getChildInfo, updateChildInfo } from "@/services/admin";

export default function Admin() {
    const [plan, setPlan] = useState({
        dailyRate: "2",
        cashAmount: "3",
        donationPercent: "1",
        weeklyBonus: false,
        weeklyAmount: "5",
        monthlyBonus: false,
        monthlyAmount: "5",
        childWalletId: "https://ilp.interledger-test.dev/tommy"
    });

    useEffect(() => {
        const cb = async () => {
            let data = await getChildInfo("67b09cbbdc0eb1383838f376");
            setPlan((prev) => ({ ...prev, dailyRate: data.dailyRate, childWalletId: data.walletId }));
        }

        cb();
    }
        ,
        []
    );

    const [childDetails, setchildDetails] = useState({
        childName: "Tommy",
        walletAddress: "Fakeaddress"
    });

    const [updateObj, setUpdateObj] = useState({});

    function updatePlan(key, value) {
        setPlan((prev) => ({ ...prev, [key]: value }));
        setUpdateObj((prev) => ({ ...prev, dailyRate: value }))
    }

    function updateDetails(key, value) {
        setPlan((prev) => ({ ...prev, [key]: value }));
        setUpdateObj((prev) => ({ ...prev, [key]: value }))
    }


    return (
        <div className="flex flex-col mt-10 ml-10 flex-grow text-lg">
            <div>
                <h1 className="text-5xl font-extrabold "> {childDetails.childName} </h1>
            </div>
            <div id="dailyRate">
                <div className="grid grid-cols-[2fr,1fr]">
                    <Separator className="mt-10 mb-5" />
                </div>
                <div className="grid grid-cols-3">
                    <label className="self-center">
                        {"Daily Limit: " + plan.dailyRate + " hours"}
                    </label>
                    <Slider
                        max={48}
                        value={[Number(plan.dailyRate) * 2]}
                        onValueChange={(val) => { console.log(val[0]); updatePlan("dailyRate", Number(val[0]) / 2) }}
                    />
                </div>
            </div>
            <div id="daily" className=" grid grid-rows-3">
                <div className="grid grid-cols-[2fr,1fr]">
                    <Separator className="mt-10 mb-5" />
                </div>
                <div className="grid grid-cols-3">
                    <label>
                        Wallet Address
                    </label>
                    <Input type="walletAddress" placeholder="New Wallet Address" className="w-full" value={plan.childWalletId} onChange={(e) => {
                        const val = e.target.value;
                        console.log(val);
                        console.log(updateObj);
                        updateDetails("childWalletId", val)
                    }} />
                </div>
                <div className="grid grid-cols-3">
                    <label>
                        Daily Cash
                    </label>
                    <Input className="w-1/4" type="number" value={plan.cashAmount} onChange={(val) => updatePlan("cashAmount", val[0])} />
                </div>
                {/* <div className="grid grid-cols-3">
                    <label>
                        Donation (%)
                    </label>
                    <Input className="w-1/4" type="number" value={plan.donationPercent} onChange={(val) => updatePlan("donationPercent", val[0])} />
                </div> */}
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
                <Button className="bg-black text-white w-1/2" variant="outline" onClick={async () => (await updateChildInfo("67b09cbbdc0eb1383838f376", updateObj))}> Save </Button>
            </div>
        </div >


    );
}
