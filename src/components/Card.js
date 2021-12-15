import React, { useState } from "react";
import Image from "next/image";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Card = (props) => {
   const [currentPerson, setCurrentPerson] = useState(0);

   const { id, name, job, image, text } = props[currentPerson];

   return (
      <div className="w-min-width lg:w-fixed-width bg-white rounded p-10 text-center">
         <div style={{ fontSize: "0" }} className="">
            <Image src={image} width={200} height={200} className="rounded-full block" />
            <span>
               <FaChevronRight />
            </span>
         </div>
         
            <h4>{name}</h4>
            <p>{job}</p>
            <p> {text}</p>
         <div>
            <button>
               <FaChevronLeft/>
            </button>
            <button>
               <FaChevronRight/>
            </button>
         </div>
         <button>Surprise Me</button>
      </div>
   );
};

export default Card;
