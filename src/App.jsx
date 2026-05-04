import { useState } from "react";
import TopBackgroungImage from "./components/TopBg";
import jobsData from "./data.json";
import JobCard from "./components/Card";
import FilterBar from "./components/FilterData";

function App() {
  const [filters, setFilters] = useState([]);

  const addFilter = (tag) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  };

  const removeFilter = (tag) => {
    setFilters(filters.filter((f) => f !== tag));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobsData.filter((job) => {
    if (filters.length === 0) return true;

    const tags = [job.role, job.level, ...job.languages];

    return filters.every((filter) => tags.includes(filter));
  });

  return (
    <>
      <div className="bg-green-50 min-h-screen">
        <FilterBar
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />

        <div className="space-y-4">
          <TopBackgroungImage />
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} addFilter={addFilter} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
