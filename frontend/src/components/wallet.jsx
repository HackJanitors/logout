import React from 'react';

const Wallet = ({currentEarnings}) => {

    return (
        <div className="bento flex flex-col items-center gap-8 py-12 px-10 w-full"> 
            <div className="text-2xl">
                This week, you earned
            </div>
            <div className="font-bold text-4xl">
                ${currentEarnings}
            </div>
            <div className="text-2xl">
                Keep up the great work!
            </div>
        </div>
    );
};

export default Wallet;