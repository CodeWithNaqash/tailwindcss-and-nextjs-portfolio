import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Panaverse Dao Website',
    description: 'First ever build website Panaverse Dao.',
    image: '/Panaverse.png',
    github: 'https://github.com/CodeWithNaqash/Panavere-Samplesite',
    link: 'https://panavere-website.vercel.app',
  },
  {
    name: 'Todo App',
    description:
      'Todo App that make us remind the Plan of a Day/List of Work to complete in a Month.',
    image: '/Todo App.png',
    github: 'https://github.com/CodeWithNaqash/todo-app',
    link: 'https://todo-app-theta-flame.vercel.app',
  },
  {
    name: 'Blog',
    description: 'Building Blog website with two blogs in it.',
    image: '/Blog_P.png',
    github: 'https://github.com/CodeWithNaqash/next.js12-blog',
    link: 'https://nextjs-blog-two-topaz-28.vercel.app',
  },
  {
    name: 'Pricing UI',
    description: 'Landing pricing page with Chakra UI and Next.js',
    image: '/PricingUI.png',
    github: 'https://github.com/CodeWithNaqash/pricinguichakra',
    link: 'https://pricinguichakra-rust.vercel.app',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-orange-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
