import React from 'react';
import GoalList from './goallist';
import { Skeleton } from "./ui/skeleton";

const Goals = ({ isLoading, name, goalCallback, saveCallback }) => {

    return (
        <div className="">

            {
                isLoading ? (
                    <Skeleton className="w-[500px] h-[50px] rounded-md" />
                ) : (
                    <div className="font-bold text-4xl mb-6">
                        {name}'s Goals
                    </div>
                )
            }

            <div className="bento p-10">
                <div className="text-2xl mb-10">
                    Instead of playing games,
                </div>
                <GoalList goalCallback={goalCallback} saveCallback={saveCallback} />
            </div>

        </div>
    )
};

export default Goals;