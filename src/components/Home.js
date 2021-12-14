import Head from "next/head";
import Card from "./Card";

export function Home() {
   return (
      <div className="flex items-center justify-center min-h-screen py-2 bg-sky-50">
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="">
            <h1 className="capitalize font-extrabold text-4xl  mb-6 underlineMe">our reviews</h1>
            <Card />
         </main>
      </div>
   );
}

//pull in data
