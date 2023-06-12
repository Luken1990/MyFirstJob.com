import { useId, useState, useContext } from 'react';
import {
  jobType,
  salaryRange,
  workLocation,
} from './static-components/formData';
import { JobContext } from '../../App';
import { nanoid } from 'nanoid';
import { fetchData } from '../../utilities/fetchData';

export const FilterForm = ({ url, setUrl }) => {
  const [jobPosting, setJobPosting] = useContext(JobContext);
  const [types, setTypes] = useState([]);
  const [base, setBase] = useState([]);
  const id = useId();

  const handleDate = async (e) => {
   
  };

  const handleType = async (e) => {
  
  };

  return (
    <div className="col-span-12  sm:col-span-4">
      <div className="rounded-md border border-slate-200">
        <div className=" flex justify-between border-b-[1px] p-4">
          <h3>Filter</h3>
          <p className="cursor-pointer text-secondary">Clear All</p>
        </div>

        <form action="" className="p-4">
          <div className="border-b-[1px] py-6">
            <label htmlFor="date">Date Post</label>
            <select
              onChange={(e) => handleDate(e)}
              name="date"
              id="date"
              className="mt-2 block w-full rounded-md border bg-white p-2 text-sm "
            >
              <option value="all">Anytime</option>
              <option value="today">Today</option>
              <option value="3days">Last 3 days</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>
          </div>

          <div className="border-b-[1px] py-6">
            <label htmlFor="range">Job type</label>

            <div className="mt-2 flex flex-wrap gap-y-1">
              {jobType.map(({ type }, index) => {
                return (
                  <div
                    key={nanoid()}
                    className="flex basis-1/2 items-center gap-2"
                  >
                    <input
                      className="border-1 rounded-sm border-slate-400 text-secondary focus:ring-0 focus:ring-offset-0"
                      id={`${id}-${type}`}
                      name={type}
                      type="checkbox"
                      value={type}
                      onChange={handleType}
                      checked={types.includes(type) ? true : false}
                    />
                    <label
                      htmlFor="<1k"
                      className="text-sm capitalize text-slate-400"
                    >
                      {type}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6">
            <label htmlFor="range">On-site/remote</label>

            <div className="mt-2 flex flex-wrap gap-y-1">
              {workLocation.map(({ location }, index) => {
                return (
                  <div
                    key={nanoid()}
                    className="flex basis-1/2 items-center gap-2"
                  >
                    <input
                      id={`${id}-${location}`}
                      name={location}
                      type="checkbox"
                      className="border-1 rounded-sm border-slate-400 text-secondary focus:ring-0 focus:ring-offset-0"
                    />
                    <label
                      htmlFor="<1k"
                      className="text-sm capitalize text-slate-400"
                    >
                      {location}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


// const handleDate = async (e) => {
//   const date = e.target.value;
//   setOptions({
//     ...options,
//     params: {
//       ...options.params,
//       date_posted: date,
//     },
//   });
//   const filterDate = await fetchData(options);
//   setJobPosting(filterDate.results);
// };

// const handleType = async (e) => {
//   const type = e.target.value;

//   if (!types.includes(type)) {
//     setTypes([...types, type]);
//   } else {
//     const filteredTypes = types.filter((item) => item !== type);
//     setTypes(filteredTypes);
//   }

//   const typeStr = types.join(',').toUpperCase();
//   console.log(typeStr);

//   setOptions({
//     ...options,
//     params: {
//       ...options.params,
//       employment_types: typeStr,
//     },
//   });
//   console.log(options);
//   const filterRequirements = await fetchData(options);
//   setJobPosting(filterRequirements.data);
// };