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
        title: 'Bed Bug Treatment',
        description: 'Cimex lectularius',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's5'
    },
    {
        title: 'Fly Control',
        description: 'Diptera',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's6'
    },
    {
        title: 'Bed Bug Treatment',
        description: 'Cimex lectularius',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's5'
    },
    {
        title: 'Fly Control',
        description: 'Diptera',
        image_uri: 'https://picsum.photos/200',
        redirect_url: 's6'
    }
    // Add more card data objects as needed
];


const ScrollCardServices = () => {
    return (

        <div className=' bg-yellow-200 p-16'>
            <div>
            <p className='text-red-500 text-sm uppercase'>Pest Library</p>
    <h1 className='text-5xl font-semibold  max-w-[30rem] my-4'>We believe pest control begins with a deep scientific understanding.</h1>
    <p className='text-red-500 text-sm uppercase'>Pest Library</p>
                <div className="overflow-x-auto mt-14 flex ">
                    {cardData.map((card, index) => (
                        <div key={index} className="mx-4">
                            <CircularPestList title={card.title} description={card.description} redirect_url={card.redirect_url} image_uri={card.image_uri} />
                        </div>
                    ))}
                </div>
            </div>
        </div>



    );
};

export default ScrollCardServices;




