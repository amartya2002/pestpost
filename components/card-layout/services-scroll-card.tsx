import React from 'react';
import Card from './card';

const cardData = [
  {
    title: 'Targeted Pest Control',
    description:
      'Laser-focused pest treatments using industry-leading technology to rid your home of pests quickly and effectively.',
    redirect_url: 's1',
  },
  {
    title: 'Rodent Extermination',
    description:
      'Effective rodent control solutions to keep your home free from mice and rats.',
    redirect_url: 's2',
  },
  {
    title: 'Termite Inspection',
    description:
      'Thorough termite inspection services to protect your property from termite damage.',
    redirect_url: 's3',
  },
  {
    title: 'Bed Bug Treatment',
    description:
      'Comprehensive bed bug treatment plans to eliminate bed bugs from your home.',
    redirect_url: 's4',
  },
  {
    title: 'Mosquito Control',
    description:
      'Professional mosquito control services to keep your outdoor living spaces mosquito-free.',
    redirect_url: 's5',
  },
  {
    title: 'Ant Extermination',
    description:
      'Efficient ant extermination methods to eradicate ant colonies and prevent infestations.',
    redirect_url: 's6',
  },
  // Add more card data objects as needed
];

const ScrollCardServices = () => {
  return (
    <div className="ml-40 mt-14 flex overflow-x-auto ">
      {cardData.map((card, index) => (
        <div key={index} className="mx-4">
          <Card
            title={card.title}
            description={card.description}
            redirect_url={card.redirect_url}
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollCardServices;
