import React from "react";

function Certificate({
  title,
  image,
  description,
  techstack,
  CertificateLink,
}) {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <img src={image} alt="" loading="lazy" />
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
          {title}
        </h1>
        <p className="text-content pt-4 font-light">{description}</p>
        <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
          Tech Stack : <span className="font-light">{techstack}</span>
        </h3>

        <div className="flex justify-end items-end mt-4">
          <div className="flex items-center">
            <svg
              className="dark:fill-light-heading fill-dark-heading inline-block min-w-fit"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              id="Capa_1"
              width="30"
              height="30"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 459 459"
            >
              <path d="M286.875 239.062h114.75v19.125h-114.75zM229.5 181.688h172.125v19.125H229.5z"></path>
              <path d="M420.75 28.688H38.25C17.212 28.688 0 45.9 0 66.938v248.625c0 21.037 17.212 38.25 38.25 38.25H76.5v76.5l47.812-47.812 47.812 47.812v-76.5H420.75c21.037 0 38.25-17.213 38.25-38.25V66.938c0-21.038-17.213-38.25-38.25-38.25M153 384.412l-28.688-28.688-28.688 28.688v-74.587q14.343 5.737 28.688 5.737c14.345 0 19.125-1.912 28.688-5.737zm-28.688-87.974c-26.775 0-47.812-21.037-47.812-47.812s21.038-47.812 47.812-47.812 47.812 21.037 47.812 47.812-21.037 47.812-47.812 47.812m315.563 19.124c0 11.475-7.65 19.125-19.125 19.125H172.125v-40.162c11.475-11.476 19.125-28.688 19.125-45.9 0-36.337-30.6-66.938-66.938-66.938s-66.938 30.6-66.938 66.938c0 19.125 7.65 34.425 19.125 45.9v40.162H38.25c-11.475 0-19.125-9.562-19.125-19.125V66.938c0-11.475 7.65-19.125 19.125-19.125h382.5c11.475 0 19.125 9.562 19.125 19.125z"></path>
              <path d="M57.375 124.312h344.25v19.125H57.375z"></path>
            </svg>

            <a
              href={CertificateLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light dark:text-white z-10 pointer-events-auto"
            >
              Certificate
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Certificate;
