import Link from 'next/link';
import React from 'react'

interface CardProps {
    title: string;
    description: string;
    redirect_url: string;
    image_uri: string;
    text_color: string;
}

const CircularPestList = ({ title, description, redirect_url, image_uri, text_color }: CardProps) => {
    return (
        <a href={redirect_url} className='flex flex-col items-center'>
            <div className="sm:w-48 sm:h-48 w-28 h-28">
                <img className='rounded-full' src={image_uri} alt="" />
            </div>
            <div className='text-center my-3 '>
                <h1 className={`text-lg font-semibold ${text_color === 'light' ? 'text-white' : 'text-black'}`}>{title}</h1>
                <p className={`text-lg ${text_color === 'light' ? 'text-zinc-300' : 'text-zinc-400'}`}>{description}</p>
            </div>
        </a>
    )
}
export default CircularPestList;