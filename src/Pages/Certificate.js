import React from "react";
import Certificate from "../Components/Certificate";
import { certificateDetails } from "../Details";

function Certificates() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Certificate
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            certificateDetails.map(
              ({ title, image, description, techstack, CertificateLink }) => (
                <Certificate
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  CertificateLink={CertificateLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Certificates;
