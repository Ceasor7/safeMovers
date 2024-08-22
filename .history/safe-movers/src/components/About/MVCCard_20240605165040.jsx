'use client';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';

const MVCCard = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:gap-x-12 gap-y-6">
        <div className="flex justify-center items-center">
          <Image
            src={cards[currentCardIndex].imageSrc}
            alt={cards[currentCardIndex].title}
            height={300}
            width={500}
          />
        </div>
        <div>
          <CardContent>
            <p className=" font-bold text-2xl py-0 pt-4">
              {cards[currentCardIndex].title}
            </p>
            <p>{cards[currentCardIndex].description}</p>
          </CardContent>

          <div className=" pl-6">
            <button
              className=" top-1/2 left-0 transform -translate-y-1/2 bg-[#00008b] rounded-l-lg text-white"
              onClick={prevCard}
            >
              <svg
                viewBox="0 0 24 24"
                className=" h-9 w-9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 7.766c0-1.554-1.696-2.515-3.029-1.715l-7.056 4.234c-1.295.777-1.295 2.653 0 3.43l7.056 4.234c1.333.8 3.029-.16 3.029-1.715V7.766zM9.944 12L17 7.766v8.468L9.944 12zM6 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </button>
            <button
              className="top-1/2 right-0 transform -translate-y-1/2 bg-[#00008b] rounded-r-lg text-white"
              onClick={nextCard}
            >
              <svg
                viewBox="0 0 24 24"
                className=" h-9 w-9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 7.766c0-1.554 1.696-2.515 3.029-1.715l7.056 4.234c1.295.777 1.295 2.653 0 3.43L8.03 17.949c-1.333.8-3.029-.16-3.029-1.715V7.766zM14.056 12L7 7.766v8.468L14.056 12zM18 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MVCCard;
