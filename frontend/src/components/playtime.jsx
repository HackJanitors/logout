import { Progress } from "@/components/ui/progress"
import React from 'react';
import { getMinutesFromHours, getHoursAndMinutesFromMinutes, formatTimeString } from "@/lib/timeFormatter";

const Playtime = ({ currentTime, totalTime }) => {
    const leftTime = totalTime - currentTime;
    const timePercentage = 100 - Math.floor(100 * currentTime / totalTime);
    const [totalHours, totalMinutes] = getHoursAndMinutesFromMinutes(totalTime);
    const [currentHours, currentMinutes] = getHoursAndMinutesFromMinutes(currentTime);
    const [leftHours, leftMinutes] = getHoursAndMinutesFromMinutes(leftTime);

    return (
        <div className="bento flex flex-col gap-8 py-12 px-20">
            <div className="text-2xl">
                You have {formatTimeString(leftHours, leftMinutes)} remaining.
            </div>

            <div className="flex flex-between items-center gap-3">
                <Progress value={timePercentage} className="h-10 rounded-xl" />

                <div className="text-2xl font-bold">
                    {timePercentage}%
                </div>
            </div>

            <div className="text-2xl">
                You've played {formatTimeString(currentHours, currentMinutes)} out of {formatTimeString(totalHours, totalMinutes)}.
            </div>
        </div>
    );
};

export default Playtime;