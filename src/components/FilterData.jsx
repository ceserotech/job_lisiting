const FilterBar = ({ filters, removeFilter, clearFilters }) => {
  if (filters.length === 0) return null;

  return (
    <div className="w-full  mx-auto bg-white p-6 px-10 rounded shadow-md flex-wrap flex justify-between md:gap-20 items-center mb-6 absolute top-30 left-2 ">
      
      <div className="flex flex-wrap gap-2">
        {filters.map((filter, index) => (
          <div key={index} className="flex items-center bg-green-100 rounded">
            <span className="px-2 text-green-700 font-bold">{filter}</span>
            <button
              onClick={() => removeFilter(filter)}
              className="bg-green-700 text-white px-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button onClick={clearFilters} className="text-gray-500">
        Clear
      </button>
    </div>
  );
};

export default FilterBar;