const JobCard = ({ job, addFilter }) => {
  const tags = [job.role, job.level, ...job.languages];

  return (
    <div className="bg-white p-6 rounded-lg max-w-6xl mx-auto  mt-18 md:mt-12 shadow-md flex flex-col md:flex-row justify-between gap-4 border-l-4 border-green-500">
      {/* LEFT */}
      <div className="flex flex-col md:flex-row items-start mb-5 md:mb-2 md:items-center md:justify-center justify-start gap-3">
        <div className="w-2/9 -mt-14 md:mt-1">
          <img src={job.logo} alt="" className="w-6/8 mx-auto" />
        </div>
        <div>
          <h3 className="text-green-600 font-bold">{job.company}</h3>
          <h2 className="font-bold text-lg">{job.position}</h2>

          <p className="text-gray-500 text-sm">
            {job.postedAt} • {job.contract} • {job.location}
          </p>
        </div>
      </div>

      {/* RIGHT TAGS */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => addFilter(tag)}
            className="bg-green-100 text-green-700 px-3 py-1 rounded font-semibold hover:bg-green-600 hover:text-white"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
