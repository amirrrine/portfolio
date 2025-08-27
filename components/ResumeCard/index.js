import React from "react";

const ResumeCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <div
        className="
         content-center overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "100%" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover justify-items-center content-center  transition-all ease-out duration-400"
          src={img}
        ></img>
      </div>
    </div>
  );
};

export default ResumeCard;
