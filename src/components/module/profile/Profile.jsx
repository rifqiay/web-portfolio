import React from "react";
import img from "../../../../public/img/profile.jpeg";
import Image from "next/image";

export default function Profile({ setBackground, background }) {
  return (
    <>
      <div>
        <Image
          src={img}
          alt="Picture of the author"
          width={200}
          style={{ borderRadius: "50%" }}
          // height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />

        <h3
          className={
            background === "#fff"
              ? "my-5 text-2xl font-bold text-black"
              : `my-5 text-2xl font-bold text-white`
          }
        >
          Personalize Theme
        </h3>
        <div className="flex gap-3">
          <div
            className={
              background === "#fff"
                ? "h-10 w-10 border-4 border-[#24292E] bg-white rounded-full cursor-pointer"
                : `h-10 w-10 border-4 border-white bg-white rounded-full cursor-pointer`
            }
            onClick={() => setBackground("#fff")}
          ></div>
          <div
            className={
              background === "#fff"
                ? "h-10 w-10 border-4 border-[#24292E] rounded-full bg-[#192734] cursor-pointer"
                : `h-10 w-10 border-4 border-white rounded-full bg-[#192734] cursor-pointer`
            }
            onClick={() => setBackground("#192734")}
          ></div>
          <div
            className={
              background === "#fff"
                ? "h-10 w-10 border-4 border-[#24292E] rounded-full bg-[#78866B] cursor-pointer"
                : `h-10 w-10 border-4 border-white rounded-full bg-[#78866B] cursor-pointer`
            }
            onClick={() => setBackground("#78866B")}
          ></div>
          <div
            className={
              background === "#fff"
                ? "h-10 w-10 border-4 border-[#24292E] rounded-full bg-[#7E4C74] cursor-pointer"
                : `h-10 w-10 border-4 border-white rounded-full bg-[#7E4C74] cursor-pointer`
            }
            onClick={() => setBackground("#7E4C74")}
          ></div>
        </div>
      </div>
      <div
        className={
          background === "#fff"
            ? "mt-10 bg-[#F0EAD6] md:w-[25rem] md:h-52 relative w-80 h-40"
            : `mt-10 bg-[#111921] md:w-[25rem] md:h-52 relative w-80 h-40`
        }
      >
        <div
          className={
            background === "#fff"
              ? "bg-white absolute md:w-[25rem] md:h-52 md:-right-8 top-8 border border-gray-300 rounded-md px-4 py-5 opacity-80 shadow-lg w-80 -right-5 text-black"
              : `bg-[${background}] absolute md:w-[25rem] md:h-52 md:-right-8 top-8 border border-gray-300 rounded-md px-4 py-5 opacity-80 shadow-lg w-80 -right-5 text-white`
          }
        >
          <h1 className="text-bold text-3xl">What I Do</h1>
          <p className="mt-6 text-lg">
            Create a fullstack website from the backend and frontend.
          </p>
        </div>
      </div>
    </>
  );
}
