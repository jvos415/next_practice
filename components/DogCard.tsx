import React from "react";
import { RandoDogImg } from "@/app/page";

interface DogCardProps {
  dog: RandoDogImg;
}

function DogCard({ dog }: DogCardProps) {
  return (
    <div className="border rounded w-[350px] p-4 flex flex-col items-center gap-3">
      {dog?.message.split("/")[4]}
      <img src={dog?.message} alt={dog?.message.split("/")[4]} />
    </div>
  );
}

export default DogCard;
