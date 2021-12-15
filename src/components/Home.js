import Head from "next/head";
import Card from "./Card";
import data from 'data/data'

export function Home() {
  
   return (
      <div className="flex items-center justify-center min-h-screen py-2 bg-sky-50">
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="">
            <h1 className="text-center capitalize font-extrabold text-4xl  mb-6 underlineMe">our reviews</h1>
            <Card {...data}/>
         </main>
      </div>
   );
}

//pull in data
