import { useContext } from "react";
import { Filter, Job, Layout } from "./components";
import { AppContext } from "./context/AppContext";

function App() {
  const { jobs, filterTags } = useContext(AppContext);

  return (
    <Layout>
      <div className="2xl:flex 2xl:justify-center 2xl:mt-10">
        {filterTags.length > 0 && <Filter />}
      </div>
      <div
        className={`2xl:flex 2xl:flex-col 2xl:items-center ${
          filterTags.length === 0 && "mt-mobile 2xl:mt-40 xl:mt-32"
        }`}
      >
        {filterTags.length === 0
          ? jobs.map((job) => <Job key={job.id} job={job} />)
          : jobs.map((job) => {
              const tags = [
                job.role,
                job.level,
                ...job.languages,
                ...job.tools,
              ];
              if (!filterTags.some((tag) => tags.indexOf(tag) == -1)) {
                return <Job key={job.id} job={job} />;
              }
            })}
      </div>
    </Layout>
  );
}

export default App;
