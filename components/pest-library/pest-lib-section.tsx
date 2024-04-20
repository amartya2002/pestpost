import React from 'react';
import CircularPestList from './circular-pest-card';

const cardData = [
    {
        title: 'Cockroach',
        description: 'Blattodea',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's1'
    },
    {
        title: 'Termite',
        description: 'Isoptera',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's2'
    },
    {
        title: 'Mosquito',
        description: 'Culicidae',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's3'
    },
    {
        title: 'Ant',
        description: 'Formicidae',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's4'
    },
    {
        title: 'Bed Bug',
        description: 'Cimex lectularius',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's5'
    },
    {
        title: 'Fly',
        description: 'Diptera',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's6'
    },
    {
        title: 'Bed Bug',
        description: 'Cimex lectularius',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's5'
    },
    {
        title: 'Fly',
        description: 'Diptera',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's6'
    }
    // Add more card data objects as needed
];


const ScrollCardServices = () => {
    return (

<div className='bg-[#CC092F] px-6 pt-12 md:px-12 lg:px-32 '>
    <div className='mx-auto max-w-7xl'>
        <p className='text-white text-xs uppercase mb-2'>Pest Library</p>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-[30rem] mb-2'>
            We believe pest control begins with a deep scientific understanding.
        </h1>
        <p className='text-white text-xs uppercase mb-6'>Pest Library</p>
        <div className="overflow-x-auto flex">
            {cardData.map((card, index) => (
                <div key={index} className="mx-4">
                    <CircularPestList title={card.title} description={card.description} redirect_url={card.redirect_url} image_uri={card.image_uri} text_color='light' />
                </div>
            ))}
        </div>
    </div>
</div>




    );
};

export default ScrollCardServices;




