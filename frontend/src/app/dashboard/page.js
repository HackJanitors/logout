import Namecard from "@/components/namecard";
import React from "react";
import { Progress } from "@/components/ui/progress"
import Wallet from "@/components/wallet";
import Playtime from "@/components/playtime";
import Goals from "@/components/goals";
import Achievement from "@/components/achievement";
import AchievementList from "@/components/achievementList";
import { getDashboardInformation } from "@/services/dashboard"; 

export default async function Home({ params }) {

    async function getName() {
        const id = await (params).id

        const {child, hours} = await getDashboardInformation("67b09cbbdc0eb1383838f378")
        
        console.log(child);
        console.log(hours);
        return child.name ? child.name : "Tommy"
    }

    async function getAchievementList() {
        return [
            {
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
            }
        ]
    }

    async function getGoals() {
        return [
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
        ]
    }
    const goalList = await getGoals();

    async function getCurrentEarnings() {
        return 100;
    }

    async function getCurrentMinutes() {
        return 2;
    }

    async function getTotalMinutes() {
        return 30;
    }

    const name = await getName();
    const currentEarnings = await getCurrentEarnings();
    const currentMinutes = await getCurrentMinutes();
    const totalMinutes = await getTotalMinutes();
    const achievementList = await getAchievementList();

    return (
        <>
            <div className="ml-10 m-10">
                <Namecard name={name} />

                <div className="flex gap-20 mt-10">
                    <div className="flex flex-col gap-14">
                        <Playtime currentTime={currentMinutes} totalTime={totalMinutes} />
                        <Goals name={name} 
                        goalCallback={async (id) => {
                            "use server";
                            console.log(id);
                        }} 
                        saveCallback={async (list) => {
                            "use server";
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
