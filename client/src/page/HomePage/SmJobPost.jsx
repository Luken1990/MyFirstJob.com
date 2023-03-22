export const SmJobPost = ({ post }) => {
  const {
    employer_name,
    employer_logo,
    employer_company_type,
    job_employment_type,
    job_title,
    job_is_remote,
    job_city,
    job_country,
    job_min_salary,
    job_max_salary,
    job_posted_at_datetime_utc,
    job_description,
  } = post;

  return (
    <div className="flex flex-col gap-y-2 rounded-md border border-slate-200 p-4">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="inline-flex items-center gap-3">
          {employer_logo ? (
            <img className="h-8" src={employer_logo} alt="" />
          ) : null}

          <h3>{job_title}</h3>
        </div>
        <p className="text-sm">{`${job_city}, ${job_country}`}</p>
      </div>

      <div className="flex w-full flex-row items-center justify-between">
        <ul className="ml-3 flex list-disc gap-6 text-xs text-slate-600">
          <li>{employer_name}</li>
          <li>{job_employment_type}</li>
          {job_min_salary && job_max_salary ? (
            <li>{`£${job_min_salary} - £${job_max_salary}`}</li>
          ) : null}
        </ul>
        <small className=" text-slate-400">{job_posted_at_datetime_utc}</small>
      </div>

      <div className="mt-6">
        <p className="text-xs">
          {job_description.length > 400
            ? `${job_description.split(' ').slice(0,50).join(' ')} . . . continue reading `
            : job_description}
        </p>
        {/* <ul className="list-inside list-disc text-sm">
          <li>Item1</li>
          <li>Item2</li>
        </ul> */}
      </div>
    </div>
  );
};
