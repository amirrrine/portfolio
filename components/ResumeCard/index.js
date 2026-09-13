import React from "react";

const ResumeCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-6 first:ml-0 link"
      onClick={onClick}
    >
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <div className="mt-5 overflow-hidden rounded-lg">
        <img
          alt={name ? name : "Project"}
          className="w-full rounded-lg"
          src={img}
        ></img>
      </div>
    </div>
  );
};

export default ResumeCard;
