import React from "react";
import image from "../img/download.png";

const Work = () => {
  return (
    <div className="bg-[#0a192f] px-24">
      <div className="text-4xl text-center pt-24 font-bold text-gray-300">
        My Recent <span className="text-[#54dde4]">Works</span>
      </div>
      <div className="text-gray-300 text-center">
        Here are a few projects I have worked on.
      </div>
      <div className="flex mt-16 pb-24 pl-12 w-11/12 justify-between">
        <div className="relative px-8 hover:scale-110 duration-300">
          <div className="absolute h-full w-72 bg-[#54dde4] rounded-lg blur-sm"></div>
          <div className="h-full w-72 relative rounded-lg inset-0 bg-[#0a192f] border border-[#54dde4]">
            <div className="mt-8 px-6">
              <div className="text-3xl font-bold text-gray-200">
                Expense Tracker
              </div>
              <div className="text-gray-200">
                <img src={image} alt="app" />
                <p className="pt-3 pb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  reiciendis sunt corrupti sapiente magni repudiandae fuga
                  veniam aliquam pariatur cupiditate velit nobis laborum saepe
                  vero atque eaque delectus, recusandae at?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative px-8 hover:scale-110 duration-300">
          <div className="absolute h-full w-72 bg-[#54dde4] rounded-lg blur-sm"></div>
          <div className="h-full w-72 relative rounded-lg inset-0 bg-[#0a192f] border border-[#54dde4]">
            <div className="mt-8 px-6">
              <div className="text-3xl font-bold text-gray-200">
                Expense Tracker
              </div>
              <div className="text-gray-200 text-center">
                <img src={image} alt="app" />
                <p className="pt-3 pb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  reiciendis sunt corrupti sapiente magni repudiandae fuga
                  veniam aliquam pariatur cupiditate velit nobis laborum saepe
                  vero atque eaque delectus, recusandae at?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative px-8 hover:scale-110 duration-300">
          <div className="absolute h-full w-72 bg-[#54dde4] rounded-lg blur-sm"></div>
          <div className="h-full w-72 relative rounded-lg inset-0 bg-[#0a192f] border border-[#54dde4]">
            <div className="mt-8 px-6">
              <div className="text-3xl font-bold text-gray-200">
                Expense Tracker
              </div>
              <div className="text-gray-200">
                <img src={image} alt="app" />
                <p className="pt-3 pb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  reiciendis sunt corrupti sapiente magni repudiandae fuga
                  veniam aliquam pariatur cupiditate velit nobis laborum saepe
                  vero atque eaque delectus, recusandae at?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
