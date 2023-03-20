import React from 'react';

export const Header = () => {
  return (
    <header className="">
      <div className="relative h-[25vh] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1620120966883-d977b57a96ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt=""
        />
        <div className="container mx-auto">
          <div className="absolute top-[40%] flex flex-col px-4 text-white">
            <h1 className="mb-4 text-2xl font-bold capitalize sm:text-4xl">
              Find your dream job
            </h1>
            <p className="text-sm">
              Looking to land your first dream job? Browse our latest openings
              and apply!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
