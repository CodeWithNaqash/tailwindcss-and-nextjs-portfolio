import React from 'react';
import Image from 'next/image';

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
];
const AboutSection = () => {
  return (
    <section id="about">
      {/* <div className="my-12 pb-12 md:pt-16 md:pb-48"> */}
      <div className="my-12 pb-12 md:pt-16 md:pb-36">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Education
            </h1>
            <p>
              Hi, my name is Naqash and I am a{' '}
              <span className="font-bold">{'highly ambitious'}</span>,
              <span className="font-bold">{' self-motivated'}</span>, and
              <span className="font-bold">{' driven'}</span> web engineer based
              in Panaverse Dao.
            </p>
            <br />
            <p>
              I graduating from Sindh Madressatul Islam University, Karachi in
              2019 with a BS in Computer Science and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{' '}
              <span className="font-bold text-orange-400">
                never stop growing
              </span>{' '}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            {/* <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start"> */}
            <div className="flex flex-wrap flex-col justify-between md:justify-start">
              <div>
                <div className="flex justify-between px-4 font-semibold text-gray-500">
                  <p>HTML</p>
                  <p>90%</p>
                </div>
                <div>
                  <div className="flex my-1 rounded before:rounded bg-gray-200 w-full after:-z-10 before:bg-orange-400 h-3 before:w-11/12 before:z-10"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between px-4 font-semibold text-gray-500">
                  <p>CSS</p>
                  <p>60%</p>
                </div>
                <div>
                  <div className="flex my-1 rounded before:rounded bg-gray-200 w-full after:-z-10 before:bg-orange-400 h-3 before:w-3/5 before:z-10"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between px-4 font-semibold text-gray-500">
                  <p>Javascript</p>
                  <p>50%</p>
                </div>
                <div>
                  <div className="flex my-1 rounded before:rounded bg-gray-200 w-full after:-z-10 before:bg-orange-400 h-3 before:w-1/2 before:z-10"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between px-4 font-semibold text-gray-500">
                  <p>Typescript</p>
                  <p>45%</p>
                </div>
                <div>
                  <div className="flex my-1 rounded before:rounded bg-gray-200 w-full after:-z-10 before:bg-orange-400 h-3 before:w-2/5 before:z-10"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between px-4 font-semibold text-gray-500">
                  <p>React</p>
                  <p>40%</p>
                </div>
                <div>
                  <div className="flex my-1 rounded before:rounded bg-gray-200 w-full after:-z-10 before:bg-orange-400 h-3 before:w-2/5 before:z-10"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between px-4 font-semibold text-gray-500">
                  <p>Next.js</p>
                  <p>50%</p>
                </div>
                <div>
                  <div className="flex my-1 rounded before:rounded bg-gray-200 w-full after:-z-10 before:bg-orange-400 h-3 before:w-1/2 before:z-10"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between px-4 font-semibold text-gray-500">
                  <p>Tailwind CSS</p>
                  <p>65%</p>
                </div>
                <div>
                  <div className="flex my-1 rounded before:rounded bg-gray-200 w-full after:-z-10 before:bg-orange-400 h-3 before:w-2/3 before:z-10"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between px-4 font-semibold text-gray-500">
                  <p>Git</p>
                  <p>75%</p>
                </div>
                <div>
                  <div className="flex my-1 rounded before:rounded bg-gray-200 w-full after:-z-10 before:bg-orange-400 h-3 before:w-3/4 before:z-10"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between px-4 font-semibold text-gray-500">
                  <p>GitHub</p>
                  <p>80%</p>
                </div>
                <div>
                  <div className="flex my-1 rounded before:rounded bg-gray-200 w-full after:-z-10 before:bg-orange-400 h-3 before:w-4/5 before:z-10"></div>
                </div>
              </div>
            </div>

            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
