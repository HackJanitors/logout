import React from 'react';

const Transaction = ({ date, amount, recipient, topUp }) => {
    return (
        <div className="bg-[rgb(248,243,243)] shadow-md flex my-2 py-4 px-2 w-full text-xl border border-white rounded-[10px]">
            <div id="date" className="w-1/3 flex-0">
                {date}
            </div>
            <div id="amount" className="w-1/3 flex-0 font-semibold" style={{color: topUp ? "rgb(0, 230, 100)" : "rgb(255, 0, 0)"}}>
                {topUp ? '+' + amount : '-' + amount}
            </div>
            <div id="recipient" className="w-1/3 flex-0">
                {recipient}
            </div>
        </div>
    );
};

export default Transaction;