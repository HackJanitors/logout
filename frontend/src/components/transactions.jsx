import React from 'react';
import Transaction from './transaction';

const Transactions = ({ transactions }) => {
    return (
        <>
            <div>
                <div>
                    <h1 className="text-3xl font-semibold my-8"> Transaction History </h1>
                </div>
                <div className="flex w-full px-2 py-3">
                    <div id="dateColumnLabel" className="text-2xl font-semibold w-1/3 flex-0">
                        Date
                    </div>
                    <div id="amountColumnLabel" className="text-2xl font-semibold w-1/3 flex-0">
                        Amount
                    </div>
                    <div id="recipientColumnLabel" className="text-2xl font-semibold w-1/3 flex-0">
                        Recipient
                    </div>
                </div>
                <ul>
                    {transactions.map((transaction) => {
                        return (
                            <li key={transaction.date + transaction.amount + transaction.recipient} className="my-3">
                                <Transaction date={transaction.date} amount={transaction.amount} recipient={transaction.recipient} topUp={transaction.topUp}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Transactions;