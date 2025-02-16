"use client"

import Namecard from "@/components/namecard";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress"
import Wallet from "@/components/wallet";
import Playtime from "@/components/playtime";
import Goals from "@/components/goals";
import Achievement from "@/components/achievement";
import AchievementList from "@/components/achievementList";
import { getDashboardInformation } from "@/services/dashboard"; 
import { runMockTransaction } from "@/services/transaction"
import { getHoursAndMinutesFromHours, formatTimeString, getMinutesFromHours } from "@/lib/timeFormatter";
import { socket } from "@/socket";
import { Button } from "@/components/ui/button";

export default function Home({ params }) {

    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState("")
    const [currentEarnings, setCurrentEarnings] = useState(100)
    const [currentMinutes, setCurrentMinutes] = useState(0)
    const [totalMinutes, setTotalMinutes] = useState(0)
    const [achievementList, setAchievementList] = useState([{
                imgSrc: "/flame.png",
                title: "5 Day Streak",
                desc: "Good Job!"
            },
            {
                imgSrc: "/log-out.svg",
                title: "Logged Off",
                desc: "Clocked 0 hours of game time for a day"
            },
            {
                imgSrc: "https://thumbs.dreamstime.com/b/happy-old-man-29232681.jpg",
                className: "overflow-hidden",
                title: "Philanthropist",
                desc: "Donated a cumulative total of $100"
            }])
    const [goalList, setGoalList] = useState([
            {
                desc: "Read 5 books",
                id: 1,
                done: true,
            },
            {
                desc: "Practice soccer for 5 days",
                id: 2,
                done: false,
            },
            {
                desc: "Draw a Portrait",
                id: 3,
                done: true,
            },
            {
                desc: "Meditate",
                id: 4,
                done: false,
            }
        ])

    useEffect(() => {
        const getInfo = async () => {
            try {
                const {child, hours} = await getDashboardInformation("67b09cbbdc0eb1383838f378")
                setName(child?.username ? child.username : "")
                setCurrentMinutes(getMinutesFromHours(hours))
                setTotalMinutes(getMinutesFromHours(Number(child?.dailyRate)))
                setIsLoading(false)
            } catch (_) {
                setName("Tommy")
                setCurrentMinutes(getMinutesFromHours(10))
                setTotalMinutes(getMinutesFromHours(Number(12)))
                setIsLoading(false)
            }
        }
        
        getInfo()
    }, [setName])

    useEffect(() => {
        socket.on("addWalletEnumeration", (total) => {
            setCurrentEarnings(currentEarnings + total)
        })
    })

    return (
        <>
            <div className="ml-10 m-10">
                <div className="flex flex-row gap-3 justify-between">
                    <Namecard name={name} isLoading={isLoading}/>
                    <Button onClick={runMockTransaction}><div className="font-bold">Approve Transaction</div></Button>
                </div>
                <div className="flex gap-20 mt-10">
                    <div className="flex flex-col gap-14">
                        <Playtime currentTime={currentMinutes} totalTime={totalMinutes} isLoading={isLoading} />
                        <Goals name={name} 
                        goalCallback={async (id) => {
                            console.log(id);
                        }} 
                        saveCallback={async (list) => {
                            console.log(list);
                        }} />
                    </div>

                    <div className="flex flex-col gap-14">
                        <Wallet currentEarnings={currentEarnings} />

                        <AchievementList achievementList={achievementList} />
                    </div>
                </div>
            </div>
        </>
    );
}
