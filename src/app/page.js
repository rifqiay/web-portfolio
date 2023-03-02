"use client";
import Image from "next/image";
import Input from "@/components/base/input/Input";
import Cards from "@/components/module/cards/Cards";
import Header from "@/components/base/header/Header";
import Profile from "@/components/module/profile/Profile";
import { useState } from "react";
import blanja from "../../public/img/home.png";
import telegrams from "../../public/img/chat.png";
import github from "../../public/img/github.svg";
import linkedin from "../../public/img/linkedin.svg";
import pworld from "../../public/img/pworld.png";
import recipe from "../../public/img/recipe.png";

export default function Home() {
  const [background, setBackground] = useState("#192734");
  return (
    <div className={`bg-[${background}] pb-20`}>
      <div className="w-11/12 mx-auto">
        <section
          className={
            background === "#fff"
              ? "h-20 bg-[#EAEAEA] flex items-center justify-center text-black"
              : `h-20 bg-[${background}] text-white flex items-center justify-center`
          }
        >
          <Header />
        </section>
        <section
          className={
            background === "#fff"
              ? "flex justify-between w-full border border-b-0 border-gray-300 bg-[#EAEAEA] py-3 px-3 rounded-md"
              : `flex justify-between w-full border border-b-0 border-gray-300 bg-[${background}] text-white py-3 px-3 rounded-md`
          }
        >
          <div className="flex gap-3 ">
            <div className="h-4 w-4  bg-[#FC6058] rounded-full"></div>
            <div className="h-4 w-4  bg-[#FEC02F] rounded-full"></div>
            <div className="h-4 w-4  bg-[#2ACA3E] rounded-full"></div>
          </div>
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
        </section>

        <section className="mt-8 md:flex justify-around mb-5">
          <Profile setBackground={setBackground} background={background} />
        </section>

        {/* <div className="h-3 w-full bg-gray-200 lg:mt-0 mt-20"></div> */}

        <section className="mt-10 lg:grid grid-cols-2 gap-5 justify-evenly">
          <div
            className={background === "#fff" ? "text-slate-900" : "text-white"}
          >
            <h1 className="text-2xl font-bold ">More about me</h1>
            <div className="mt-5 ">
              <p>
                I am a Fullstack Web Developer who has skills in various modern
                web technologies. I have extensive experience in:
              </p>
              <ul className="list-disc">
                <li>
                  HTML, CSS, and Javascript to build user interfaces. I am also
                  skilled in CSS frameworks such as Bootstrap and Tailwind CSS.
                </li>
                <li>Node.js and Express.js to build APIs and servers.</li>
                <li>
                  React.js, Next.js, and React Native to build frontend
                  applications.
                </li>
                <li>PostgreSQL for database management.</li>
              </ul>
              <p className="mt-2">
                With a combination of front-end and back-end skills, I can build
                complete web solutions from start to finish. I am also always
                trying to improve my skills and keep up with the latest web
                technology developments.
              </p>
              <p>
                If you are looking for a Fullstack Web Developer for your
                project, please contact me. I would be happy to help you build
                an amazing web application. Thank you!
              </p>
            </div>
            <div className="flex gap-5 mt-5">
              <a
                href="http://www.linkedin.com/in/rifqiay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="linkedin" width={50} />
              </a>
              <a
                href="https://github.com/rifqiay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={github} alt="github" width={50} />
              </a>
            </div>
          </div>
          <div
            className={
              background === "#fff"
                ? "px-5 mt-20 lg:border-l-2 border-gray-300 text-slate-900"
                : "px-5 mt-20 lg:border-l-2 border-gray-300 text-white"
            }
          >
            <h1 className="text-2xl font-bold ">My Skills</h1>
            <p className="mt-3 text-lg font-medium">Fullstack Web Developer</p>

            <a
              href="https://drive.google.com/file/d/1GUSU39A-buUETXMn60FjBxTpQDepXoyy/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#17A2B8] hover:underline cursor-pointer"
            >
              Download Resume
            </a>
            <div
              className={
                background === "#fff"
                  ? "flex bg-[#F0EAD6] justify-around w-11/12 py-5 font-medium mt-5 text-slate-900"
                  : "flex bg-[#111921] justify-around w-11/12 py-5 font-medium mt-5 text-white"
              }
            >
              <ul className="list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>Javascript</li>
              </ul>
              <ul className="list-disc">
                <li>Node JS</li>
                <li>React JS</li>
                <li>Express JS</li>
                <li>Next JS</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className={
            background === "#fff"
              ? "mt-10 bg-gray-200 px-5 py-10"
              : "mt-10 bg-[#111921] px-5 py-10 text-white"
          }
        >
          <h1 className="lg:text-3xl md:text-xl font-bold text-center text-2xl">
            Some of my past projects
          </h1>
          <div className="grid md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
            <Cards
              background={background}
              name="Blanja"
              description="is a website-based application that can be used to buy and sell goods.
Blanja is developed with the PERN stack (PostgreSQL, Express js, React js, Node js). Blank
is an independent project here I act as Frontend Developer and Backend Developer."
              thumb={blanja}
              demo="https://olshop-kappa.vercel.app/"
            />
            <Cards
              background={background}
              name="Telegrams"
              description="is a web-based application that can be used to send or receive messages
chat messages in realtime. Telegrams is developed with the PERN stack (PostgreSQL, Express js,
Reactjs, Nodejs). Telegrams is an independent project, here I play the role of Frontend
Developers and Backend Developers."
              thumb={telegrams}
              demo="https://chats-dun.vercel.app"
            />
            <Cards
              background={background}
              name="Peworld"
              description="is a website-based application that can be used to find jobs and
can also be used to find workers. Peworld is developed with the PERN stack
(PostgreSQL, Express js, React js, Node js) and use the Next Js framework. Peworld
is an independent project here I act as Frontend Developer and Backend Developer."
              thumb={pworld}
              demo="https://hirejob-omega.vercel.app"
            />

            <Cards
              background={background}
              name="Recipe Food"
              description="is a web-based application that can be used to search for recipes
delicious and nutritious food. Recipe App is developed with the PERN stack (PostgreSQL,
Express js, React js, Node js). Recipe App is a project team, here I play a role
as a Frontend Developer."
              thumb={recipe}
              demo="https://recipe-app-frontend-rho.vercel.app/home"
            />
          </div>
        </section>

        <section className="mt-10 mb-20 flex justify-center" id="contact">
          <div
            className={
              background === "#fff"
                ? "lg:w-7/12 md:w-10/12  bg-gray-200 p-5 w-full"
                : "lg:w-7/12 md:w-10/12  bg-[#111921] p-5 w-full text-white"
            }
          >
            <h1 className="text-2xl font-bold text-center mb-7">
              Get in touch
            </h1>
            <form action="https://formspree.io/f/meqwkzov" method="POST">
              <div>
                <label htmlFor="name">Name</label>
                <Input type="text" name="name" id="name" />
              </div>
              <div className="mt-3">
                <label htmlFor="subject">Subject</label>
                <Input type="text" name="subject" id="subject" />
              </div>
              <div className="mt-3">
                <label htmlFor="email">Email</label>
                <Input type="emaiil" name="email" id="email" />
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="7"
                  className="border border-gray-300 rounded-md focus:outline-none p-3 mt-1"
                ></textarea>
              </div>
              <button
                type="submit"
                className={
                  background === "#fff"
                    ? "bg-black text-white w-full p-2 rounded-sm mt-5"
                    : `bg-[${background}] text-white w-full p-2 rounded-sm mt-5`
                }
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
