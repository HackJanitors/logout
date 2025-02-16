import Image from 'next/image';
import React from 'react';

const Achievement = ({ imgSrc, title, desc, className }) => {
    return (
        <div className="flex flex-row items-center gap-3">
            <div className={"relative rounded-full w-12 h-12 border-white " + className}>
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