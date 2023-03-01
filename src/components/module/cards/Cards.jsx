import React from "react";
import Image from "next/image";
import LongText from "@/components/base/long-text/LongText";

export default function Cards({ background, name, description, thumb, demo }) {
  return (
    <div>
      <div className="relative">
        <Image
          src={thumb}
          alt="Picture of the author"
          style={{ objectFit: "cover" }}
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <div
        className={
          background === "#fff"
            ? "bg-white p-3 rounded-b-lg shadow-lg text-black border-t"
            : "bg-[#212e3a] p-3 rounded-b-lg shadow-lg text-white border-t"
        }
      >
        <hr className="border-t-2 my-2" />
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold mb-2 hover:text-blue-700 hover:underline cursor-pointer"
        >
          {name}
        </a>
        <LongText content={description} limit={20} />
      </div>
    </div>
  );
}
