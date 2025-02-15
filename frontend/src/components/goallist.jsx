import React from 'react';
import { Goal } from './goal';

const GoalList = async ({callback, goalList}) => {

    return (
        <ul key={"abcd"}>
            {
                goalList.map(goalObj => {
                    return (
                        <li key={goalObj.goalId} className="my-6">
                            <Goal goal={goalObj.description} goalId={goalObj.id} done={goalObj.done} callback={callback}/>
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default GoalList;