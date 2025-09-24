import React, { useState } from "react";

const ToogleBtns = () => {
  // state: কোন বাটন সিলেক্টেড আছে
  const [active, setActive] = useState("All");

  return (
    <div className="text-right max-w-[1200px] mx-auto mb-8">
      {/* All */}
      <button
        onClick={() => setActive("All")}
        className={`px-4 py-1 font-semibold cursor-pointer rounded-l-xl
          ${
            active === "All"
              ? "bg-purple-500 text-white"   // যদি active হয়
              : "bg-purple-100 text-purple-500" // না হলে
          }`}
      >
        All
      </button>

      {/* Pending */}
      <button
        onClick={() => setActive("Pending")}
        className={`px-4 py-1 font-semibold cursor-pointer
          ${
            active === "Pending"
              ? "bg-purple-500 text-white"
              : "bg-purple-100 text-purple-500"
          }`}
      >
        Pending
      </button>

      {/* Submitted */}
      <button
        onClick={() => setActive("Submitted")}
        className={`px-4 py-1 font-semibold cursor-pointer
          ${
            active === "Submitted"
              ? "bg-purple-500 text-white"
              : "bg-purple-100 text-purple-500"
          }`}
      >
        Submitted
      </button>

      {/* Reviewed */}
      <button
        onClick={() => setActive("Reviewed")}
        className={`px-4 py-1 font-semibold cursor-pointer rounded-r-xl
          ${
            active === "Reviewed"
              ? "bg-purple-500 text-white"
              : "bg-purple-100 text-purple-500"
          }`}
      >
        Reviewed
      </button>
    </div>
  );
};

export default ToogleBtns;
