import Image from 'next/image';
import React from 'react';

const Achievement = ({ imgSrc, title, desc }) => {
    return (
        <div className="flex flex-row items-center gap-3">
            <div className="relative rounded-full w-14 h-14 overflow-hidden border border-white">
                <Image
                    src={imgSrc}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <div className="text-xl font-semibold">
                    {title}
                </div>
                <div className="text-lg text-[rgb(170,170,170)]" >
                    {desc}
                </div>
            </div>
        </div>
    );
};


export default Achievement;