import React from 'react';

export const About = () => {
  return (
    <div className="container mx-auto p-4">
      <section>
        <div className="my-20 flex flex-col items-center  gap-8 sm:flex-row">
          <div className="flex-1">
            <h1 className="mb-4 text-4xl">About MFJ.com</h1>
            <p className=" text-slate-600">
              MFJ has millions of unique visitors each month, making it the #1
              job site in the world. By offering free access to job search,
              resume posting, and company research, MFJ aims to put job seekers
              first. We connect millions of people to new opportunities every
              day.
            </p>
          </div>
          <figure className="flex-1 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </figure>
        </div>
      </section>

      <section>
        <div className="my-40 flex  flex-col gap-y-10 sm:flex-row ">
          <div className="flex flex-1 flex-col items-center justify-center">
            <h2 className="text-6xl font-bold text-secondary">100M+</h2>
            <p className=" text-slate-600">Unique monthly visitors</p>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <h2 className="text-6xl font-bold text-secondary">50M+</h2>
            <p className=" text-slate-600">Land their first major job</p>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <h2 className="text-6xl font-bold text-secondary">600M+</h2>
            <p className=" text-slate-600">Total rating and reviews</p>
          </div>
        </div>
      </section>

      <section>
        <div className="my-20 flex flex-col items-center gap-8 sm:flex-row">
          <figure className="flex-1 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </figure>
          <div className="flex-1">
            <h1 className="mb-4 text-4xl">Our Commitment</h1>
            <p className=" text-slate-600">
              At MFJ, we are committed to helping people land their first job.
              We have more than 10,000 employees around the world passionately
              pursuing this purpose. Our goal is to create a collaborative
              workplace where job seekers will be able to successfully find a
              job.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

//https://unsplash.com/photos/GOMhuCj-O9w
//https://unsplash.com/photos/TamMbr4okv4
