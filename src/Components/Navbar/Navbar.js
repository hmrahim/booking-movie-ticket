import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div class="navbar bg-primary w-full md:w-5/6 lg:w-5/6 mx-auto text-white">
      <div class="flex-1">
        <Link to="/" class="btn btn-ghost normal-case text-xl">Home</Link>
      </div>
      <div class="flex-none">
        
      </div>
    </div>
  );
};

export default Navbar;
