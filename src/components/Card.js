import React, { useState } from "react";
import Image from "next/image";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Card = (props) => {
   const [currentPerson, setCurrentPerson] = useState(0);

   const {name, job, image, text } = props[currentPerson];
   const nameMeLater = Object.keys(props).length;

   const nextPerson = () => {
      console.log(currentPerson,nameMeLater);
      setCurrentPerson(currentPerson + 1)
      if (currentPerson === nameMeLater) {
         setCurrentPerson(0)
      }
   }

   const previousPerson = () => {
      
   }

   return (
      <div className="w-min-width lg:w-fixed-width bg-white rounded p-10 text-center">
         <div style={{ fontSize: "0" }} className="relative">
            <Image src={image} width={200} height={200} className="rounded-full block" />
            <span className="absolute">
               <FaChevronRight />
            </span>
         </div>
         
            <h4>{name}</h4>
            <p>{job}</p>
            <p> {text}</p>
         <div>
            <button onClick={previousPerson}>
               <FaChevronLeft/>
            </button>
            <button onClick={nextPerson}>
               <FaChevronRight/>
            </button>
         </div>
         <button>Surprise Me</button>
      </div>
   );
};

export default Card;
