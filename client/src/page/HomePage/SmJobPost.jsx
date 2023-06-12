import { useNavigate, Link } from 'react-router-dom';
import { formatDistance, subDays, format } from 'date-fns';

export const SmJobPost = ({ post }) => {
  const {
    id,
    title,
    created,
    salary_max,
    salary_min,
    location,
    contract_time,
    company,
    description,
  } = post;

  return (
    <div className="flex flex-col gap-y-2 rounded-md border border-slate-200 p-4">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="inline-flex items-center gap-3">
          {/* {employer_logo ? (
            <img className="h-8" src={employer_logo} alt="" />
          ) : null} */}
          <Link to={`/job/${id}`}>
            <h3>{title}</h3>
          </Link>
        </div>
        {location ? (
          <p className="text-sm">{`${location.area[1]}, ${location.area[0]}`}</p>
        ) : null}
      </div>

      <div className="flex w-full flex-row items-center justify-between">
        <ul className="ml-3 flex list-disc gap-6 text-xs text-slate-600">
          <li>{company.display_name}</li>

          {contract_time ? (
            <li className=" capitalize">{contract_time.replace('_', ' ')}</li>
          ) : null}

          {salary_min && salary_max ? (
            <li>{`£${salary_min} - £${salary_max}`}</li>
          ) : null}
        </ul>
        <small className=" text-slate-400">
          {/* {formatDistance(subDays(format(new Date(created), 'p, dd/MM/yyyy')), new Date(), {
            addSuffix: true,
          })} */}
          {format(new Date(created), 'dd-MM-yyyy')}
        </small>
      </div>

      <div className="mt-6">
        {description ? (
          <p className="text-xs">
            {description.length > 400
              ? `${description
                  .split(' ')
                  .slice(0, 50)
                  .join(' ')} . . . continue reading `
              : description}
          </p>
        ) : null}

        {/* <ul className="list-inside list-disc text-sm">
          <li>Item1</li>
          <li>Item2</li>
        </ul> */}
      </div>
    </div>
  );
};
