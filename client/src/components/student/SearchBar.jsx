import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setinput] = useState(data ? data : "");

  const onSearchHandler = (e) => {
    e.preventDefault()
    navigate('/course-list/' + input);
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded-full"
    >
      <div className="md:w-auto w-10 px-3 font-bold"><IoIosSearch /></div>
      <input
        onChange={(e) => setinput(e.target.value)}
        value={input}
        type="text"
        
        placeholder="Search for Courses"
        className="w-full h-full outline-none text-gray-500/80"
      />
      <button type="submit" className="bg-blue-600 font-bold text-white md:px-10  px-7 md:py-3 py-2 mx-1 rounded-full ">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
