import { Progress } from "@/components/ui/progress";
import React from "react";
import {
  getMinutesFromHours,
  getHoursAndMinutesFromMinutes,
  formatTimeString,
} from "@/lib/timeFormatter";
import { Skeleton } from "./ui/skeleton";

const Playtime = ({ currentTime, totalTime, isLoading }) => {
  const leftTime = totalTime - currentTime;
  const exceededTime = currentTime - totalTime;
  const timePercentage = 100 - Math.floor((100 * currentTime) / totalTime);
  const [totalHours, totalMinutes] = getHoursAndMinutesFromMinutes(totalTime);
  const [currentHours, currentMinutes] =
    getHoursAndMinutesFromMinutes(currentTime);
  const [leftHours, leftMinutes] = getHoursAndMinutesFromMinutes(leftTime);
  const [exceededHours, exceededMinutes] =
    getHoursAndMinutesFromMinutes(exceededTime);

  return (
    <div className="bento flex flex-col gap-8 py-12 px-20">
      {isLoading ? (
        <Skeleton className="w-[500px] h-[100px] rounded-md" />
      ) : (
        <>
          <div className="text-2xl">
            You have {formatTimeString(leftHours, leftMinutes)} remaining.
          </div>
          <div className="flex flex-between items-center gap-3">
            <Progress value={timePercentage} className="h-10 rounded-xl" />
            <div className="text-2xl font-bold">
              {leftTime > 0 ? timePercentage : 0}%
            </div>
          </div>
          <div className="text-2xl w-[600px]">
            {leftTime > 0 ? (
              <>
                You played{" "}
                <b> {formatTimeString(currentHours, currentMinutes)} </b>
                out of <b> {formatTimeString(totalHours, totalMinutes)} </b>
              </>
            ) : (
              <>
                You exceeded your limit of{" "}
                <b> {formatTimeString(totalHours, totalMinutes)} </b>
                by <b> {formatTimeString(exceededHours, exceededMinutes)} </b>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Playtime;
