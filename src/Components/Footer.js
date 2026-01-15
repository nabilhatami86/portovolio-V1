import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-black/5 dark:border-white/10">
      <div className="container mx-auto max-width py-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {year}{" "}
          <span className="font-medium text-dark-heading dark:text-light-heading">
            Muhammad Nabil Hatami
          </span>
          . Crafted with passion and precision.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
