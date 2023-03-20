import React, { useId, useContext, useEffect, useState } from 'react';
import * as CiIcons from 'react-icons/ci';
import { SmJobPost } from './SmJobPost';
import { FilterForm } from './FilterForm';

export const Main = () => {
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
