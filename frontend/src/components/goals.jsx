import React from 'react';
import GoalList from './goallist';

const Goals = ({ name, goalCallback, saveCallback }) => {

    return (
        <div className="">
            <div className="font-bold text-4xl mb-6">
                {name}'s Goals
            </div>
            <div className="bento p-10">
                <div className="text-2xl mb-10">
                    Instead of playing games, I will...
                </div>
                <GoalList goalCallback={goalCallback} saveCallback={saveCallback}/>
            </div>

        </div>
    )
};

export default Goals;