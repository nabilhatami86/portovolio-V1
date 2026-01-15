import React from "react";

function Certificate({
  title,
  image,
  description,
  techstack,
  CertificateLink,
}) {
  return (
    <article className="group h-full flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-dark-card">
      {/* IMAGE - With padding like Home */}
      <div className="relative h-40 overflow-hidden bg-gray-100 dark:bg-neutral-800 p-3">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 rounded-lg"
        />
        {/* Badge overlay */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-purple-500 text-white shadow-lg">
            Certificate
          </span>
        </div>
      </div>

      {/* CONTENT - Flex grow to fill space */}
      <div className="flex-1 flex flex-col p-4">
        {/* TITLE - 2 lines max */}
        <h3 className="text-sm font-semibold text-dark-heading dark:text-light-heading line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>

        {/* DESCRIPTION - 3 lines max */}
        <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3 min-h-[3.5rem]">
          {description}
        </p>

        {/* TECH STACK - Badges style */}
        {techstack && techstack.trim() !== "" && (
          <div className="mt-3 flex flex-wrap gap-1">
            {techstack
              .split(",")
              .slice(0, 3)
              .map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                >
                  {tech.trim()}
                </span>
              ))}
            {techstack.split(",").length > 3 && (
              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-gray-100 dark:bg-neutral-700 text-gray-500 dark:text-gray-400">
                +{techstack.split(",").length - 3}
              </span>
            )}
          </div>
        )}

        {/* VIEW CERTIFICATE - Push to bottom */}
        <div className="mt-auto pt-4 flex justify-center border-t border-gray-100 dark:border-neutral-700">
          <a
            href={CertificateLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            View Certificate
          </a>
        </div>
      </div>
    </article>
  );
}

export default Certificate;
