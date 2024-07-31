import React from 'react'

export default function Header()  {
  return (
      <div className="flex-col text-center">
        <h1 className="text-6xl font-bold">
          Become a better <br /> business with us.
        </h1>
        <p className="text-xl mt-5 font-thin mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam
          turpis tortor, ultricies ut justo eu.
        </p>
<button className="bg-purple-500 text-white py-4 px-16 rounded-full mb-32 border-2 border-buttonColor duration-500 font-bold text-xl hover:shadow-xl">
Our Business
</button>

      </div>
  );
}
