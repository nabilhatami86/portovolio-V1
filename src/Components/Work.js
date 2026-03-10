import React from "react";
import { Building2, MapPin } from "lucide-react";

function Work({ position, company, location, type, duration }) {
  return (
    <article className="relative pb-6 border-b border-black/10 dark:border-white/10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h1 className="text-base md:text-lg lg:text-xl font-medium text-dark-heading dark:text-light-heading">
          {position}
        </h1>
        <span className="inline-block w-fit rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium px-3 py-1">
          {type}
        </span>
      </div>

      <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 flex-shrink-0" />
            <span>{company}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{location}</span>
          </div>
        </div>
        <span className="text-xs md:text-sm font-light">{duration}</span>
      </div>
    </article>
  );
}

export default Work;
