import React, { useState } from "react";
import Image from "next/image";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Card = ({ data }) => {
   //set the first index in the array to 0
   const [currentPerson, setCurrentPerson] = useState(0);

   const { name, job, image, text } = data[currentPerson];
   const arrayLength = data.length - 1;


   //move to the next person in the array while avoiding stale data
   const nextPerson = () => {
      setCurrentPerson((prevState) => {
         let newState = prevState + 1;
         //if newState is greater than arrayLength reset the array else return newState
         if (newState > arrayLength) {
            return 0;
         }
         return newState;
      });
   };

   //move to the previous person in the array avoiding stale data
   const previousPerson = () => {
      setCurrentPerson((prevState) => {
         let newState = prevState - 1;
         //if newState is less than 0 get the last item in the array else return newState
         if (newState < 0) {
            return arrayLength;
         }
         return newState;
      });
   };

   const randomPerson = (params) => {
      let random = Math.floor(Math.random() * arrayLength)
      if (random === currentPerson) {
         random = currentPerson + 1;
      }
      if (random > arrayLength) {
         return 0;
      }

      if (random < 0) {
         return arrayLength;
      }
      setCurrentPerson(random) 
      
   }

   return (
      <div className="w-min-width lg:w-fixed-width bg-white rounded p-5 text-center">
         <div style={{ fontSize: "0" }} className="relative mb-4">
            <Image src={image} width={150} height={150} className="rounded-full block" />
            <span className="absolute w-5">
               <FaQuoteRight />
            </span>
         </div>

         <h4 className="text-sky-900 capitalize font-black text-lg">{name}</h4>
         <p className="text-sky-300 uppercase font-extrabold text-lg tracking-tighter mb-3">{job}</p>
         <p className="text-sky-700 font-extrabold"> {text}</p>
         <div className="mt-5">
            <button className="btn" onClick={previousPerson}>
               <FaChevronLeft />
            </button>
            <button className="btn" onClick={nextPerson}>
               <FaChevronRight />
            </button>
         </div>
         <button className="randomBtn" onClick={randomPerson}>Surprise Me</button>
      </div>
   );
};

export default Card;
