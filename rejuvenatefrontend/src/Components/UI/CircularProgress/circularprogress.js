import React from "react";

export const CircularProgress = () => {
  return (
    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div class="border-t-transparent border-solid animate-spin  rounded-full border-red border-2 h-6 w-6 border-[#d6a419]"></div>
    </div>
  );
};

export const LightCircularProgress = () => {
  return (
    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div class="border-t-transparent border-solid animate-spin  rounded-full border-red border-2 h-6 w-6"></div>
    </div>
  );
};

