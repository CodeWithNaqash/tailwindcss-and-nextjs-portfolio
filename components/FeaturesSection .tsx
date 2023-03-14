import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="Features">
      <h1 className="text-center font-bold text-4xl mt-20 md:mt-40">
        Features
        <p className="text-base font-normal">That make us unique</p>
        <hr className="w-6 h-1 mx-auto my-4 bg-orange-400 border-0 rounded"></hr>
      </h1>
      <div className="grid grid-row-4 md:grid-cols-2 lg:grid-cols-4 md:my-10">
        <div className="my-4 mx-2">
          <div className="flex items-center">
            <span className="bg-orange-400 text-white text-2xl font-extrabold rounded-full w-11 h-11 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
              </svg>
            </span>
            <h1 className="text-2xl font-bold mx-2">UI/UX Design</h1>
          </div>
          <div>
            <p className="text-left pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              nihil fuga hic accusantium saepe. Magnam ea, culpa vel neque
              soluta voluptates. Quia aut quas aspernatur molestiae fuga eaque
              repellendus ipsum?
            </p>
          </div>
        </div>
        <div className="my-4 mx-2 ">
          <div className="flex items-center">
            <span className="bg-orange-400 text-white text-2xl font-extrabold rounded-full w-11 h-11 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </span>
            <h1 className="text-2xl font-bold mx-2">Responsive</h1>
          </div>
          <div>
            <p className="text-left pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              nihil fuga hic accusantium saepe. Magnam ea, culpa vel neque
              soluta voluptates. Quia aut quas aspernatur molestiae fuga eaque
              repellendus ipsum?
            </p>
          </div>
        </div>
        <div className="my-4 mx-2 ">
          <div className="flex items-center">
            <span className="bg-orange-400 text-white text-2xl font-extrabold rounded-full w-11 h-11 flex justify-center items-center">
              {/* <h1>N</h1> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </span>
            <h1 className="text-2xl font-bold mx-2">Web Design</h1>
          </div>
          <div>
            <p className="text-left pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              nihil fuga hic accusantium saepe. Magnam ea, culpa vel neque
              soluta voluptates. Quia aut quas aspernatur molestiae fuga eaque
              repellendus ipsum?
            </p>
          </div>
        </div>
        <div className="my-4 mx-2">
          <div className="flex items-center">
            <span className="bg-orange-400 text-white text-2xl font-extrabold rounded-full w-11 h-11 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
            </span>
            <h1 className="text-2xl font-bold mx-2">SEO</h1>
          </div>
          <div>
            <p className="text-left pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              nihil fuga hic accusantium saepe. Magnam ea, culpa vel neque
              soluta voluptates. Quia aut quas aspernatur molestiae fuga eaque
              repellendus ipsum?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
