'use client';

import React, { useEffect, useState } from "react";
import DogCard from "@/components/DogCard";

export interface RandoDogImg {
  message: string;
  status: string;
}

export default function Home() {
  const [doggos, setDoggos] = useState<RandoDogImg[]>([]);

  useEffect(() => {
    const getDoggos = async() => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await res.json();
      setDoggos([...doggos, data])
    }
    getDoggos();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center gap-3 p-24">
      <div className="text-3xl"> Welcome to the Rando Doggo Application</div>
      <div> Welcome to the Rando Doggo Application</div>
      <div>
        {doggos.length > 0 && (
          doggos.map((dog) => {
            return <DogCard dog={dog}/>
          })
        )}
      </div>
    </main>
  );
}
