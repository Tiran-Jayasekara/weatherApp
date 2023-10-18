import React from "react";

const Days = ({date, celsius }) => {
  return (
    <>
      <div
        className="flex flex-row w-full p-4 bg-slate-200 rounded-xl m-4 justify-between cursor-pointer hover:bg-blue-200"
        onClick={() => {}}
      >
        <h1 className="px-8">{date}</h1>
        <h1>{celsius}</h1>
      </div>
      
    </>
  );
};

export default Days;
