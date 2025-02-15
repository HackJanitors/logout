"use client";

import React, { useState, useEffect } from 'react';
import { Goal } from './goal';

const GoalList = ({ goalCallback, saveCallback }) => {

    async function getGoals() {
        return [
            {
                desc: "Read 5 books",
                id: 1,
                done: true,
            },
            {
                desc: "Practice soccer for 5 days",
                id: 2,
                done: false,
            },
            {
                desc: "Goon for 80 days",
                id: 3,
                done: true,
            },
            {
                desc: "Practice edging for 5 days",
                id: 4,
                done: false,
            }
        ]
    }

    const [currentGoalList, setCurrentGoalList] = useState([]);

    const [isEditing, setIsEditing] = useState(false);

    const handleItemChange = (id, value) => {
        setCurrentGoalList(prevItems => prevItems.map((item, i) => (item.id === id ? { ...item, desc: value } : item)));
    };

    const toggleEdit = () => {
        setIsEditing(prev => !prev);
    };

    const handleDelete = (id) => {
        setCurrentGoalList(prevItems => prevItems.filter((obj, _) => obj.id !== id));
    };

    const handleAddItem = () => {
        setCurrentGoalList([...currentGoalList, { desc: "New goal", id: Math.floor(Math.random() * 100000).toString(), done: false }]);
    };


    useEffect(() => {
        getGoals().then((gl) => setCurrentGoalList(gl));
    }, [])


    return (
        <div>
            <ul key={"abcd"}>
                {
                    currentGoalList.map((goalObj) => {
                        return (
                            <li key={goalObj.goalId} className="my-6">
                                {isEditing ? (
                                    <div className="flex gap-4">
                                        <input
                                            className="bg-white border-2  h-16 text-xl p-2"
                                            type="text"
                                            value={goalObj.desc}
                                            onChange={(e) => handleItemChange(goalObj.id, e.target.value)}
                                        />
                                        <button
                                            onClick={() => handleDelete(goalObj.id)}
                                            className="border-2 font-bold text-white bg-red-600 rounded-[16px] px-3"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ) : (
                                    <Goal goal={goalObj.desc} goalId={goalObj.id} done={goalObj.done} callback={goalCallback} />
                                )}
                            </li>
                        )
                    })
                }
            </ul>

            <div className="mt-10 flex gap-4">
                <button className="border-2 font-bold text-white bg-black text-xl rounded-[16px] px-4 py-2" onClick={isEditing ? handleAddItem : toggleEdit}>
                    {isEditing ? "Add Item" : "Edit Goals"}
                </button>

                <button className="border-2 font-bold text-white bg-black text-xl rounded-[16px] px-4 py-2" onClick={isEditing ? toggleEdit : () => saveCallback(currentGoalList)}>
                    {isEditing ? "Save" : "Save Progress"}
                </button>
            </div>
        </div>
    )
};

export default GoalList;