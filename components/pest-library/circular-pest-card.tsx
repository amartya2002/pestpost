import Link from 'next/link';
import React from 'react'

interface CardProps {
    title: string;
    description: string;
    redirect_url: string;
    image_uri: string;
}

const CircularPestList = ({ title, description, redirect_url, image_uri }: CardProps) => {
    return (
        <a href={redirect_url}>
        <div className="w-48 h-48">
            <img className='rounded-full' src={image_uri} alt="" />
        </div>
        <div className='text-center my-3'>
            <h1 className='text-lg font-semibold'>{title}</h1>
            <p>{description}</p>
        </div>
    </a>
    )
}
export default CircularPestList;