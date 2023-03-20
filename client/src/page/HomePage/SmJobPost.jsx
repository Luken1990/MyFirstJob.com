import React from 'react';

export const SmJobPost = (job) => {
  const { role, location, company, salary, type, postDate } = job.job;

  return (
    <div className="flex flex-col gap-y-2 rounded-md border border-slate-200 p-4">
      <div className="flex w-full flex-row items-center justify-between">
        <h3>{role}</h3>
        <p className="text-sm">{location}</p>
      </div>

      <div className="flex w-full flex-row items-center justify-between">
        <ul className="ml-3 flex list-disc gap-6 text-xs text-slate-600">
          <li>{company}</li>
          <li>{type}</li>
          <li>{`${salary} - ${'£100,000'}`}</li>
        </ul>
        <small className=" text-slate-400">{postDate}</small>
      </div>

      <div>
        <ul className="list-inside list-disc text-sm">
          <li>Item1</li>
          <li>Item2</li>
        </ul>
      </div>
    </div>
  );
};
