import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Filter = () => {
  const { filterTags, setFilterTags } = useContext(AppContext);

  return (
    <div className="flex gap-6 justify-between p-6 bg-white rounded-md shadow-lg mt-32 xl:mt-24 2xl:w-9/12">
      <div className="flex gap-4 flex-wrap items-center font-bold text-desaturated-dark-cyan">
        {filterTags.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-light-grayish-cyan-ft flex rounded-l"
            >
              <span className="px-2 pt-1">{item}</span>
              <div
                className="bg-desaturated-dark-cyan flex items-center px-2 rounded-r cursor-pointer hover:bg-very-dark-grayish-cyan"
                onClick={() => {
                  const filterTagsCopy = [...filterTags];
                  const filteredTags = filterTagsCopy.filter(
                    (tag) => tag !== item
                  );
                  setFilterTags(filteredTags);
                }}
              >
                <img
                  src="images/icon-remove.svg"
                  alt="remove icon"
                  width={15}
                />
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="text-dark-grayish-cyan font-bold active:text-desaturated-dark-cyan"
        onClick={() => setFilterTags([])}
      >
        Clear
      </button>
    </div>
  );
};

export default Filter;
