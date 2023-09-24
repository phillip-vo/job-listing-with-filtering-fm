import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Job = ({ job }) => {
  const { filterTags, setFilterTags } = useContext(AppContext);
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div
      className={`h-64 xl:h-auto 2xl:w-9/12 bg-white text-body mt-10 px-6 pb-6 pt-8 flex flex-col xl:flex-row xl:justify-between xl:items-center gap-3 rounded shadow-lg relative ${
        job.featured && "border-l-5 border-desaturated-dark-cyan"
      }`}
    >
      <div className="xl:flex xl:items-center xl:gap-4">
        <img
          src={job.logo}
          alt="logo"
          className="absolute top-0 transform -translate-y-1/2 xl:relative xl:transform-none w-mobile-logo xl:w-desktop-logo"
        />
        <div className="flex flex-col gap-2">
          <div className="flex gap-8">
            <span className="text-desaturated-dark-cyan font-bold">
              {job.company}
            </span>
            {(job.new || job.featured) && (
              <div className="flex gap-2 text-xs">
                {job.new && (
                  <span className="inline-flex items-center uppercase bg-desaturated-dark-cyan text-white rounded-full px-2 pt-1">
                    New!
                  </span>
                )}
                {job.featured && (
                  <span className="inline-flex items-center uppercase bg-very-dark-grayish-cyan text-white rounded-full px-2 pt-1">
                    Featured
                  </span>
                )}
              </div>
            )}
          </div>
          <span className="text-very-dark-grayish-cyan font-bold hover:text-desaturated-dark-cyan cursor-pointer">
            {job.position}
          </span>
          <div className="flex gap-2 text-desaturated-dark-cyan">
            <span>{job.postedAt}</span>•<span>{job.contract}</span>•
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <hr className="border-desaturated-dark-cyan xl:hidden" />
      <div className="flex gap-4 flex-wrap mt-1">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="font-bold text-desaturated-dark-cyan bg-light-grayish-cyan-ft px-2 py-1 rounded cursor-pointer hover:bg-desaturated-dark-cyan hover:text-white"
              onClick={() => {
                filterTags.includes(tag) === false &&
                  setFilterTags((prevTags) => [...prevTags, tag]);
              }}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Job;
