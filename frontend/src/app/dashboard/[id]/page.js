import Namecard from "@/components/namecard";
import React from "react";
import { Progress } from "@/components/ui/progress"
import Wallet from "@/components/wallet";
import Playtime from "@/components/playtime";
import Goals from "@/components/goals";
import Achievement from "@/components/achievement";
import AchievementList from "@/components/achievementList";

export default async function Home({ params }) {

    async function getName() {
        const id = await (params).id

        switch (params.id) {
            case "1":
                return "Alice";
            case "2":
                return "Bob";
            case "3":
                return "Charlie";
            default:
                return "Dick (Richard)";
        }
    }

    async function getAchievementList() {
        return [
            {
                imgSrc: "https://thumbs.dreamstime.com/b/happy-old-man-29232681.jpg",
                title: "A Good Goon",
                desc: "You gooned for 70 years straight"
            },
            {
                imgSrc: "https://thumbs.dreamstime.com/b/happy-old-man-29232681.jpg",
                title: "A Good Goon",
                desc: "You gooned for 70 years straight"
            },
            {
                imgSrc: "https://thumbs.dreamstime.com/b/happy-old-man-29232681.jpg",
                title: "A Good Goon",
                desc: "You gooned for 70 years straight"
            }
        ]
    }

    async function getGoals() {
        return [
            {
                description: "Read 5 books",
                id: 1,
                done: true,
            },
            {
                description: "Practice soccer for 5 days",
                id: 2,
                done: false,
            },
            {
                description: "Goon for 80 days",
                id: 3,
                done: true,
            },
            {
                description: "Practice edging for 5 days",
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

                        <Goals name={name} goalList={goalList} callback={async (id) => {
                            "use server";
                            console.log(id);
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
