import React from 'react';
import Achievement from './achievement';

const AchievementList = ({ achievementList }) => {
    return (
        <div className="">
            <div className="font-bold text-4xl mb-6">
                Achievements
            </div>
            <ul className="bento flex-col flex items-center p-4">
                {achievementList.map(({ imgSrc, title, desc }) => (
                    <li key={title} className="my-6">
                        <Achievement imgSrc={imgSrc} title={title} desc={desc} />
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default AchievementList;