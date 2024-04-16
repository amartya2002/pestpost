import React from 'react';

interface CardProps {
  title: string;
  description: string;
  redirect_url: string;
}
const Card = ({ title, description, redirect_url }: CardProps) => {
  return (
    <a
      href={redirect_url}
      className="flex h-[22rem] w-[20rem] sm:h-[24rem] sm:w-[22rem] flex-col justify-between border-2 border-black bg-white px-10 py-14 duration-300 hover:shadow-xl"
    >
      <div>
        <h1 className="mb-4 break-words text-2xl font-bold md:text-3xl">
          {title}
        </h1>
        <p className="font-sans text-gray-600">{description}</p>
      </div>
      <svg
        width="50"
        height="50"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform transition duration-300 hover:translate-x-3 hover:fill-black"
      >
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
          fill="red"
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  );
};
export default Card;
