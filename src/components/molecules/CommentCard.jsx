import React from 'react';
import Image from 'next/image';

const CommentCard = ({ comment }) => {
    return (
        <div className="w-[48%] md:w-[32%] flex items-start justify-start flex-col gap-y-10 bg-bg-box-purple rounded-2xl px-3 py-6">
            <h4 className="font-Estedad-Light text-title text-lg md:text-[27px] font-normal">{comment.title}</h4>
            <p className="font-Estedad-Light text-title text-sm md:text-lg">{comment.text}</p>
            <div className="w-full flex items-center justify-between">
                <div className="w-fit flex flex-col items-start justify-start gap-y-2">
                    <p className={"font-Estedad-Light text-gray-700"}>{comment.name}</p>
                    <p className={"font-Estedad-Light text-gray-700"}>{comment.description}</p>
                </div>
                <Image src={comment.img} alt="img" />
            </div>
        </div>
    );
};

export default CommentCard;
