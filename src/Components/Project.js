import React from "react";

function Project({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
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
        <div className="mt-3 flex flex-wrap gap-1">
          {techstack
            .split(",")
            .slice(0, 3)
            .map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
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

        {/* ACTIONS - Push to bottom */}
        <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100 dark:border-neutral-700">
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Preview
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z"
              />
            </svg>
            Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
