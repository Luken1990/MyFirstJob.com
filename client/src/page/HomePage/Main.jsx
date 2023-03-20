import React, { useId, useContext, useEffect, useState } from 'react';
import * as CiIcons from 'react-icons/ci';
import {
  jobType,
  salaryRange,
  workLocation,
} from './static-components/formData';
import { SmJobPost } from './SmJobPost';

export const Main = () => {
  const id = useId();
  const [location, setLocation] = useState('');
  const [job, setJob] = useState('');

  const jobs = [
    {
      role: 'Junior Front-End Developer',
      company: 'devTech',
      salary: '£25,000',
      location: 'Remote',
      type: 'Full-time',
      description: 'description',
      postDate: new Date().toLocaleDateString(),
    },
    {
      role: 'Junior Front-End Developer',
      company: 'devTech',
      salary: '£25,000',
      location: 'Remote',
      type: 'Full-time',
      description: 'description',
      postDate: new Date().toLocaleDateString(),
    },
    {
      role: 'Junior Front-End Developer',
      company: 'devTech',
      salary: '£25,000',
      location: 'Remote',
      type: 'Full-time',
      description: 'description',
      postDate: new Date().toLocaleDateString(),
    },
    {
      role: 'Junior Front-End Developer',
      company: 'devTech',
      salary: '£25,000',
      location: 'Remote',
      type: 'Full-time',
      description: 'description',
      postDate: new Date().toLocaleDateString(),
    },
    {
      role: 'Junior Front-End Developer',
      company: 'devTech',
      salary: '£25,000',
      location: 'Remote',
      type: 'Full-time',
      description: 'description',
      postDate: new Date().toLocaleDateString(),
    },
  ];

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-12 gap-3 px-4 py-8">
        <div className="col-span-12  sm:col-span-4">
          <div className="rounded-md border border-slate-200">
            <div className=" flex justify-between border-b-[1px] p-4">
              <h3>Filter</h3>
              <h3 className="text-secondary">Clear All</h3>
            </div>

            <form action="" className="p-4">
              <div>
                <label htmlFor="date">Date Post</label>
                <select
                  name="date"
                  id="date"
                  className="mt-2 block w-full rounded-md border bg-white p-2 text-sm "
                >
                  <option value="anytime">Anytime</option>
                  <option value="today">Today</option>
                  <option value="threeDays">Last 3 days</option>
                  <option value="lastWeek">Last week</option>
                </select>
              </div>

              <hr className="my-6" />

              <div>
                <label htmlFor="range">Job type</label>

                <div className="mt-2 flex flex-wrap gap-y-1">
                  {jobType.map(({ type }, index) => {
                    return (
                      <div
                        key={index}
                        className="flex basis-1/2 items-center gap-2"
                      >
                        <input
                          id={`${id}-${type}`}
                          name={type}
                          type="checkbox"
                          className="border-1 rounded-sm border-slate-400 text-secondary focus:ring-0 focus:ring-offset-0"
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

              <hr className="my-6" />

              <div>
                <label htmlFor="range">On-site/remote</label>

                <div className="mt-2 flex flex-wrap gap-y-1">
                  {workLocation.map(({ location }, index) => {
                    return (
                      <div
                        key={index}
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
                onChange={(e) => setJob(e.target.value)}
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
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button className="text-sm">Search</button>
          </div>

          {jobs.map((job, index) => {
            return <SmJobPost key={index} job={job} />;
          })}
        </div>
      </div>
    </main>
  );
};
