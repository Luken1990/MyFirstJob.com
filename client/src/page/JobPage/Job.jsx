import { useContext } from 'react';
import { JobContext } from '../../App';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import * as GrIcons from 'react-icons/gr';
import * as AiIcons from 'react-icons/ai';

const Job = () => {
  const [jobPosting, setJobPosting] = useContext(JobContext);
  const { id } = useParams();

  const job = jobPosting.filter((job) => job.job_id === id);

  return (
    <div className="container mx-auto">
      {job.map(
        ({
          title,
          created,
          salary_max,
          salary_min,
          location,
          contract_time,
          company,
          description,
        }) => {
          return (
            <div className="py-20  px-4" key={nanoid()}>
              <div className="mb-8 flex flex-col items-center gap-y-4 bg-slate-100 p-4">
                <h2 className="text-2xl">{title}</h2>
                <small>{created}</small>

                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                  <div className="flex items-center gap-3">
                    <GrIcons.GrLocation />
                    {location.area[3] && location.area[0] ? (
                      <p className="text-sm">{`${location.area[3]}, ${location.area[0]}`}</p>
                    ) : null}
                  </div>

                  <div className="flex items-center gap-3">
                    <AiIcons.AiOutlineHome />
                    {job_is_remote ? (
                      <p className="text-sm">Remote</p>
                    ) : (
                      <p className="text-sm">On-Site</p>
                    )}
                  </div>

                  {job_max_salary && job_max_salary ? (
                    <div className="flex items-center gap-3">
                      <GrIcons.GrMoney />
                      <p className="text-sm">{`£${salary_min} - £${salary_max} ${
                        job_salary_period === 'HOUR'
                          ? 'an hour'
                          : job_salary_period === 'YEAR'
                          ? 'A year'
                          : 'a month'
                      }`}</p>
                    </div>
                  ) : null}

                  <div className="flex items-center gap-3">
                    <AiIcons.AiOutlineClockCircle />
                    {contract_time === 'FULLTIME' ? (
                      <p className="text-sm">full-time</p>
                    ) : (
                      <p className="text-sm">part-time</p>
                    )}
                  </div>
                </div>
                <a
                  className="rounded-md border bg-primary px-4 py-2 text-lightgrey hover:bg-secondary"
                  href={job_apply_link}
                >
                  Apply
                </a>
              </div>

              <div className="mb-16">
                <h3 className="mb-8 text-xl font-bold">{employer_name}</h3>

                {description ? (
                  <>
                    {description.split('\n\n').map((item) => {
                      return (
                        <p key={nanoid()} className="mb-4 text-sm">
                          {item.split('\n').map((item) => item)}
                        </p>
                      );
                    })}
                  </>
                ) : null}

                {job_highlights ? (
                  <>
                    {job_highlights.Qualifications ? (
                      <div className="mt-8">
                        <h4 className=" mb-4 text-base font-bold">
                          Qualifications
                        </h4>
                        <ul className="ml-4 list-disc text-sm">
                          {job_highlights.Qualifications.map((item) => {
                            return (
                              <li key={nanoid()} className="mb-4">
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null}

                    {job_highlights.Responsibilities ? (
                      <div className="mt-8">
                        <h3 className=" mb-4 text-lg font-bold">
                          Responsibilities
                        </h3>
                        <ul className=" ml-4 list-disc text-sm">
                          {job_highlights.Responsibilities.map((item) => {
                            return (
                              <li key={nanoid()} className="mb-4">
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null}
                  </>
                ) : null}
              </div>
              <a
                target="blank"
                className="rounded-md border bg-primary px-4 py-2 text-lightgrey hover:bg-secondary"
                href={job_apply_link}
              >
                Apply Now
              </a>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Job;
