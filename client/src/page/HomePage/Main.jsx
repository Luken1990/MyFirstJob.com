import React, { useEffect, useState, useContext } from 'react';
import * as CiIcons from 'react-icons/ci';
import * as FiIcons from 'react-icons/fi';
import { SmJobPost } from './SmJobPost';
import { FilterForm } from './FilterForm';
import { fetchData } from '../../utilities/fetchData';
import { JobContext } from '../../App';
import ReactPaginate from 'react-paginate';

export const Main = () => {
  const [jobPosting, setJobPosting] = useContext(JobContext);

  const [location, setLocation] = useState('');
  const [job, setJob] = useState('');

  const handleSearch = async () => {
    if (job && location) {
      const searchJobs = await fetchData(
        `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${
          import.meta.env.VITE_APP_ID
        }&app_key=${
          import.meta.env.VITE_APP_KEY
        }&what=${job}&where=${location}`
      );
      setJobPosting(searchJobs);
    }
  };

  const handlePageChange = async (event) => {
    const pageNum = event.selected + 1;
  };

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-12 gap-3 px-4 py-8">
        <FilterForm />

        <div className="col-span-12 flex flex-col gap-y-3 sm:col-span-8">
          <div className="flex flex-col gap-y-2 rounded-md border border-slate-200 p-4 sm:flex-row sm:p-2">
            <div className="flex w-full items-center sm:w-1/2">
              <span className="p-2">
                <CiIcons.CiSearch size={20} />
              </span>
              <input
                type="text"
                className="w-full border-none text-sm focus:border-secondary"
                placeholder="Search job title or keyword"
                value={job}
                onChange={(e) => setJob(e.target.value.toLowerCase())}
              />
            </div>
            <div className="flex w-full items-center sm:w-1/2">
              <span className="p-2">
                <CiIcons.CiLocationOn size={20} />
              </span>
              <input
                type="text"
                className="w-full border-none text-sm focus:border-secondary"
                placeholder="Country or Postcode"
                value={location}
                onChange={(e) => setLocation(e.target.value.toLowerCase())}
              />
            </div>
            <button onClick={handleSearch} className="text-sm">
              Search
            </button>
          </div>
          {jobPosting.results ? (
            <>
              {jobPosting.results.map((post, index) => {
                return <SmJobPost key={index} post={post} />;
              })}{' '}
            </>
          ) : null}

          <ReactPaginate
            previousLabel={<FiIcons.FiChevronLeft />}
            nextLabel={<FiIcons.FiChevronRight />}
            breakLabel={'...'}
            pageCount={Math.ceil(jobPosting.count / 10)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName="flex items-center justify-end gap-4 mt-4"
            pageLinkClassName="hover:text-secondary"
            activeClassName="text-secondary"
          />
        </div>
      </div>
    </main>
  );
};

// const initialOptionsState = {
//   method: 'GET',
//   url: `http://api.adzuna.com/v1/api/jobs/gb/search/${page}?app_id=f57a0f89&app_key=971b7459a1fc3cff1739561bd58134b5&results_per_page=10&what=${role}&content-type=application/json&where=${
//     location ? location : 'london'
//   }&max_days_old=${date ? date : '0'}`,
//   headers: {
//     'content-type': 'application/json',
//   },
// };

//--------------------------------------------------------

// const initialOptionsState = {
//   method: 'GET',
//   url: 'https://jsearch.p.rapidapi.com/search',
//   params: {
//     query: 'Web Developer in London, UK',
//     date_posted: 'all',
//     job_requirements: 'no_experience',
//   },
//   headers: {
//     'content-type': 'application/octet-stream',
//     'X-RapidAPI-Key': '4e3a2722f7msh233ff0c6ba70c89p166c1fjsnef615adb4095',
//     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
//   },
// };
