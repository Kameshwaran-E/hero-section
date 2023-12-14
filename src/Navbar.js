import React from 'react';

const Navbar = () => {
  return (
    <header
      className="absolute w-full px-[30px]  z-10
  h-[100px] lg:h-[130px] flex items-center "
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between ">
        <a href="/" className="max-w-[100px]">
          <h2 className="text-xl">Kameshwaran</h2>
        </a>

        <nav>
          <button className="hover:bg-slate-100 rounded-xl p-1">
            <a href="/" className="text-[#696c6d]  m-3 ">
              Product
            </a>
          </button>

          <button className="hover:bg-slate-100 rounded-xl p-1">
            <a href="/" className="text-[#696c6d]  m-3 ">
              Compare
            </a>
          </button>
          <button className="hover:bg-slate-100 rounded-xl p-1">
            <a href="/" className="text-[#696c6d]  m-3 ">
              Pricing
            </a>
          </button>
          <button className="hover:bg-slate-100 rounded-xl p-1">
            <a href="/" className="text-[#696c6d]  m-3 ">
              Contact
            </a>
          </button>
        </nav>
        <nav>
          <a
            href="/"
            className="m-5 border-2 border-stone-800 rounded-2xl hover:bg-black hover:text-white p-2"
          >
            Login
          </a>
          <a href="/" className=" bg-black text-white m-3 rounded-2xl p-3 ">
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
