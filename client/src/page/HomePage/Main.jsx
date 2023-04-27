import React, { useEffect, useState, useContext } from 'react';
import * as CiIcons from 'react-icons/ci';
import { SmJobPost } from './SmJobPost';
import { FilterForm } from './FilterForm';
import { fetchData, options } from '../../utilities/fetchData';
import { tempData } from '../../utilities/tempData';
import { JobContext } from '../../App';

export const Main = () => {
  const [jobPosting, setJobPosting] = useContext(JobContext);
  const [location, setLocation] = useState('');
  const [job, setJob] = useState('');
  const [url, setUrl] = useState(
    'https://jsearch.p.rapidapi.com/search?query=developer%20in%20london&page=1&num_pages=1&date_posted=today&job_requirements=no_experience'
  );

  //useEffect(() => {
  //   const getJobPosting = async () => {
  //     const initialPosting = await fetchData(
  //       url,
  //       options
  //     );
  //     setJobPosting(initialPosting.data);
  //     console.log(initialPosting);
  //   };
  //   getJobPosting();
  // }, []);

  useEffect(() => {
    setJobPosting(tempData);
  }, []);

  const handleSearch = async () => {
    if (job && location) {
      const searchUrl = `https://jsearch.p.rapidapi.com/search?query=${job}%20in%20${location}`;
      const searchJobs = await fetchData(searchUrl, options);
      setUrl(searchUrl);
      setJobPosting(searchJobs.data);
    }
    setJob('');
    setLocation('');
  };

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-12 gap-3 px-4 py-8">
        <FilterForm url={url} setUrl={setUrl}/>

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
          {jobPosting ? (
            <>
              {jobPosting.map((post, index) => {
                return <SmJobPost key={index} post={post} />;
              })}{' '}
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
};
