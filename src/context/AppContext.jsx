import { useState } from "react";
import { createContext } from "react";
import data from "../../data.json";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState(data);
  const [filterTags, setFilterTags] = useState([]);
  return (
    <AppContext.Provider value={{ jobs, setJobs, filterTags, setFilterTags }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
