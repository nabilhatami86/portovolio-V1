import React from "react";

function Work({ position, company, location, type, duration }) {
  return (
    <article className="relative pb-6 border-b border-black/10 dark:border-white/10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h1 className="text-base md:text-lg lg:text-xl font-medium text-dark-heading dark:text-light-heading">
          {position}
        </h1>

        <span className="inline-block w-fit rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium px-3 py-1">
          {type}
        </span>
      </div>

      {/* META */}
      <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex flex-wrap items-center gap-4">
          {/* COMPANY */}
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 16 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331Z" />
            </svg>
            <span>{company}</span>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 16 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.00001 11.25L3.78201 7.51912C2.8875 6.63817 2.49826 5.76871 2.50001 4.875C2.50001 3.78098 3.07947 2.73177 4.11092 1.95818C5.14237 1.1846 6.54132 0.75 8.00001 0.75C9.4587 0.75 10.8576 1.1846 11.8891 1.95818C12.9205 2.73177 13.5 3.78098 13.5 4.875C13.5018 5.7683 13.1127 6.63737 12.3925 7.34888L8.00001 11.25Z" />
            </svg>
            <span>{location}</span>
          </div>
        </div>

        {/* DURATION */}
        <span className="text-xs md:text-sm font-light">{duration}</span>
      </div>
    </article>
  );
}

export default Work;
