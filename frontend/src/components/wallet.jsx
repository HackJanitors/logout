import React from 'react';
import { Skeleton } from "./ui/skeleton";

const Wallet = ({ isLoading, currentEarnings, name }) => {

    return (
        <div className="bento flex flex-col items-center gap-8 py-12 px-6 w-full">
            {
                isLoading ? (
                    <Skeleton className="w-[80px] h-[40px] rounded-md" />
                ) : (
                    <div className="text-2xl text-center">
                        This week, {name} earned
                    </div>
                )

            }
            <div className="font-bold text-4xl">
                ${currentEarnings}
            </div>
            <div className="text-2xl text-center">
                Keep up the great work!
            </div>
        </div>
    );
};

export default Wallet;