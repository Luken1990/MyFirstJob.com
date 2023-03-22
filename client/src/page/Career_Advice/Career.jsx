import { useState } from 'react';
import { blogArticles } from './careerData';

export const Career = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="container mx-auto p-4">
      {blogArticles.map(({ heading, articles }, index) => {
        return (
          <section key={index} className="mt-8 border-b-[1px]">
            <h2 className="mb-8 text-2xl font-semibold capitalize">
              {heading}
            </h2>

            <div className="mb-14 grid grid-cols-3 gap-8">
              {articles.map(({ heading, image, text }, index) => {
                return (
                  <div key={index} className="flex flex-col gap-y-4">
                    <figure className="overflow-hidden rounded-lg">
                      <img src={image} alt="" />
                    </figure>
                    <div>
                      <h4 className="mb-2 font-semibold">{heading}</h4>
                      <p className=" text-sm font-light text-slate-600">
                        {`${text.split(' ').slice(0, 30).join(' ')} . . . `}
                        <span className="font-semibold ">Read more</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className=" mb-8 flex items-center justify-center gap-6">
              {articles.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`h-4 w-4 rounded-full border-2 hover:border-secondary`}
                  ></span>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};
