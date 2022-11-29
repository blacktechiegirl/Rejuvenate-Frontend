import React from "react";

const Skeleton = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];
  return (
    <div className="w-[90%] 2xl:w-[80%] mx-auto mt-16 2xl:mt-32">
      <div className="grid  grid-cols-2 xl:grid-cols-4 gap-10 animate-pulse">
        {list.map(() => {
          return (
            <div>
              <div className=" h-[200px] md:h-[300px] 2xl:h-[400px] bg-slate-200"></div>
              <div class="h-2.5 bg-gray-200 rounded-full  my-4"></div>
              <div class="h-2.5 bg-gray-200 rounded-full my-4"></div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skeleton;
