import React from "react";

function Navbar() {
  const links = [
    { id: 1, href: "#skills", text: "skills" },
    { id: 2, href: "#exp", text: "experience" },
    { id: 3, href: "#edu", text: "education" },
  ];
  return (
    <nav>
      <div className='align-element py-4 flex flex-col gap-2 sm:flex-row sm:gap-x-16 sm:justify-between sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold text-gray-600 cursor-pointer'>
          johnsarmiento.
        </h2>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide text-gray-600 hover:text-gray-800 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
